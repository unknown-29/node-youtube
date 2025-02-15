import puppeteer from 'puppeteer-core';

async function runYouTubeInBackground(videoUrl) {
	// Launch Puppeteer with the specified executable path
	const browser = await puppeteer.launch({
		headless: true, // Run in background mode (true for headless)
		executablePath: 'C:\\Program Files\\Mozilla Firefox\\firefox.exe',
		args: ['--autoplay-policy=no-user-gesture-required'], // Enable autoplay
	});

	const page = await browser.newPage();

	// Go to the YouTube video URL
	await page.goto(videoUrl, { waitUntil: 'domcontentloaded' });

	// Wait for the video element to load
	await page.waitForSelector('video');

	// Play the video and unmute it if necessary
	await page.evaluate(() => {
		const video = document.querySelector('video');

		// Ensure video is unmuted
		video.muted = false;

		// Play the video
		return video
			.play()
			.then(() => {
				console.log('YouTube video is now playing in the background');
				console.log('Muted:', video.muted); // Log if the video is muted
				console.log('Audio playing:', video.paused === false); // Check if audio is playing
			})
			.catch((error) => {
				console.log('Error playing video:', error);
			});
	});

	console.log('Video is playing in the background');
}

runYouTubeInBackground('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // Example video URL
