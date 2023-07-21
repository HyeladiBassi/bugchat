const config = require("../config");
const openAiClient = require("../services/openai");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const handleChat = catchAsync(async (req, res) => {
    const { message } = req.body;
    const context = config.context
    if (!message) throw new ApiError("Message is required", 400);
    const completion = await openAiClient.createCompletion({
        model: 'text-davinci-003',
        temperature: 0.9,
        prompt: context + message,
    })
    const result = completion.data.choices[0].text;
    res.send({ result });
})

module.exports = { handleChat };