const speech = require('@google-cloud/speech');
const fs = require('fs');

const speechClient = new speech.SpeechClient();

exports.convert = async (path, language) => {
	const fileName = path;
	console.log(fileName);
	const file = fs.readFileSync(fileName);

	const audioBytes = file.toString('base64');

	const audio = {
		content: audioBytes
	};

	const config = {
		encoding: 'LINEAR16',
		sampleRateHertz: 16000,
		languageCode: language || 'en-US'
	};
	const request = {
		audio: audio,
		config: config
	};

	// Detects speech in the audio file
	try {
		const [response] = await speechClient.recognize(request);
		const transcription = response.results
			.map(result => result.alternatives[0].transcript)
			.join('\n');
		console.log(`Transcription: ${transcription}`);

		return transcription;
	} catch (error) {
		console.log(error);
	}
};
