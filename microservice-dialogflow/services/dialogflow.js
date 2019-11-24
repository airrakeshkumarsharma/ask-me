const PROJECT_ID = 'your-project-id';

const dialogflow = require('dialogflow');
const uuid = require('uuid');

const dialogflowClient = new dialogflow.SessionsClient();
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
exports.getAnswer = async (projectId = PROJECT_ID, text, language) => {
	let responses;

	// A unique identifier for the given session
	const sessionId = uuid.v4();

	// Create a new session
	const sessionPath = dialogflowClient.sessionPath(projectId, sessionId);

	// The text query request.
	const request = {
		session: sessionPath,
		queryInput: {
			text: {
				text: text,
				languageCode: language || 'en-US'
			}
		}
	};

	try {
		responses = await dialogflowClient.detectIntent(request);
	} catch (error) {
		return error.message;
	}

	const result = responses[0].queryResult;

	if (result.intent) {
		return result.intent.displayName;
	} else {
		return `No Answer Matched.`;
	}
};
