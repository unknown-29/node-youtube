import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "@ffmpeg-installer/ffmpeg";
import fs from "fs";
ffmpeg.setFfmpegPath(ffmpegPath.path);
// ffmpeg("video.webm")
//     .toFormat("mp4")
//     .on("end", function (err) {
//         console.log("done!");
//     })
//     .on("error", function (err) {
//         console.log("an error happened: " + err.message);
//     })
//     .pipe(fs.createWriteStream("test.mp4"), { end: true });
ffmpeg(fs.createReadStream("video.webm")).noVideo().output(fs.createWriteStream("test.mp3"));
