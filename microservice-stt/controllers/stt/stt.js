const upload = require('../../lib/upload').upload;
const stt = require('../../services/stt');

exports['v1'] = (request, response) => {
	let language, path, text;

	upload(request, response, async (error, res) => {
		if (error) {
			return response.json({ error: error });
		}

		path = request.file.path;
		language = request.params.language;
		try {
			text = await stt.convert(path, language);
		} catch (error) {
			return response.status(500).json({ error: error.message });
		}

		const responseData = {
			status: 'REQUEST_SUCCESSFUL',
			statusCode: 200,
			data: {
				output: text
			}
		};

		return response.status(200).json(responseData);
	});
};
