const stt = require('../../services/stt');
const dialogflow = require('../../services/dialogflow');
const tts = require('../../services/tts');

exports['v1'] = async (request, response) => {
	let language, sttResult, dialogflowResult, ttsResult;

	try {
		language = request.params.language;
		file = request.file;

		sttResult = await stt.getText(file, language);
		dialogflowResult = dialogflow.getAnswer(sttResult, language);
		ttsResult = tts.getAudio(dialogflowResult, language);
	} catch (error) {
		return response.status(500).json({ Error: error.message });
	}

	return response.status(200).json(ttsResult);
};
