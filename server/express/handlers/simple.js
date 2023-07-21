const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const tokenize = (message) => {
  const tokens = message.trim().split(" ");
  return tokens;
};

const messageHandler = catchAsync(async (req, res) => {
  const { message } = req.body;
  if (!message) throw new ApiError("Message is required", 400);
  const tokens = tokenize(message);
  res.send({ tokens });
});

module.exports = { messageHandler };
