const axios = require('axios');

const host = 'http://localhost:9003';

const headers = {
	'Content-Type': 'application/json',
	Accepts: 'application/json'
};

exports.getAudio = async (text, language) => {
	const url = `${host}/pucho/tts/`;
	try {
		const result = await axios.request({
			method: 'POST',
			url: url,
			headers: headers,
			data: text,
			params: {
				language: JSON.stringify(language)
			}
		});

		return [null, result];
	} catch (error) {
		return [error, null];
	}
};
