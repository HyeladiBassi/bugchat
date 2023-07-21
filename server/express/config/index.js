const dotenv = require('dotenv');
dotenv.config()

const config = {
    client: "*",
    port: process.env.PORT,
    context: "",
    openAiKey: process.env.OPEN_AI_KEY,
}

module.exports = config