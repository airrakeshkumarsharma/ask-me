const stt = require('../../services/tts');

exports['v1'] = async (request, response) => {
	let language, downloadLink;

	language = request.params.language;

	try {
		downloadLink = await stt.convert(path, language);
	} catch (error) {
		return response.status(500).json(error);
	}

	const responseData = {
		status: 'REQUEST_SUCCESSFUL',
		statusCode: 200,
		data: {
			output: `http://localhost:9004/${downloadLink}`
		}
	};

	return response.status(200).json(responseData);
};
