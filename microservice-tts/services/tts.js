const DEFAULT_LANG = 'en-US';

const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();

exports.convert = async (text, language) => {
	// Construct the request
	const request = {
		input: { text: text },
		voice: {
			languageCode: language || DEFAULT_LANG,
			ssmlGender: 'NEUTRAL'
		},
		audioConfig: { audioEncoding: 'MP3' }
	};

	try {
		const [response] = await client.synthesizeSpeech(request);

		const writeFile = util.promisify(fs.writeFile);
		const audioFileName = `upload/${new Date()}.mp3`;
		const writeResult = await writeFile(
			audioFileName,
			response.audioContent,
			'binary'
		);

		if (writeResult) {
			return audioFileName;
		} else {
			return new Error('Error: Audio File Creating Error');
		}
	} catch (error) {
		return error.message;
	}
};
