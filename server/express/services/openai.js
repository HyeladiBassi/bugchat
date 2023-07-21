const { Configuration, OpenAIApi } = require("openai");
const config = require("../config");

const configuration = new Configuration({
    apiKey: config.openAiKey,
});

const openAiClient = new OpenAIApi(configuration);

module.exports = openAiClient;