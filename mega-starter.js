import { Storage, File } from 'megajs';
import fs from 'fs';
const download = async function () {
	const storage = await new Storage({
		email: 'devgmehta1608@gmail.com',
		password: 'Dgm@29042003',
	}).ready;
	console.log(
		Object.keys(storage.files).forEach((key) => {
			console.log(storage.files[key].name);
		})
	);
};
download().catch((error) => {
	console.error(error);
	process.exit(1);
});

const upload = async function () {
	const storage = await new Storage({
		email: 'devgmehta1608@gmail.com',
		password: 'Dgm@29042003',
	}).ready;

	const file = await storage.upload(
		{ name: 'hello-world.mp3', allowUploadBuffering: true },
		fs.createReadStream('./TypeScript - The Basics.mp3')
	).complete;
	console.log('The file was uploaded!', file.downloadLink);
};
upload().catch((error) => {
	console.error(error);
	process.exit(1);
});
