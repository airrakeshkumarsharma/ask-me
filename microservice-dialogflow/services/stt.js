const axios = require('axios');

const host = 'http://localhost:9004';

const headers = {
	'Content-Type': 'application/json',
	Accepts: 'application/json'
};

exports.getText = async (audio, language) => {
	const url = `${host}/pucho/stt/`;
	try {
		const result = await axios.request({
			method: 'POST',
			url: url,
			headers: headers,
			data: audio,
			params: {
				language: JSON.stringify(language)
			}
		});

		return [null, result];
	} catch (error) {
		return [error, null];
	}
};
