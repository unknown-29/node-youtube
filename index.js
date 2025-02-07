import ytdl from "@distube/ytdl-core";

import fs from "fs";
const videoId = "https://www.youtube.com/watch?v=ahCwqrYpIuM";
// Get video info from YouTube
ytdl.getInfo(videoId)
    .then((info) => {
        // Select the video format and quality
        // console.log()
        // const format = ytdl.chooseFormat(info.formats, { quality: "248" });
        const format = ytdl.chooseFormat(info.formats, { filter: "audioonly" });
        console.log(format);
        // console.log(format);
        // Create a write stream to save the video file
        const outputFilePath = `${info.videoDetails.title}.mp3`;
        const outputStream = fs.createWriteStream(outputFilePath);
        // Download the video file
        ytdl.downloadFromInfo(info, { format: format }).pipe(outputStream);
        // When the download is complete, show a message

        outputStream.on("finish", () => {
            console.log(`Finished downloading: ${outputFilePath}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });
