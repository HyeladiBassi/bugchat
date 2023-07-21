const config = require("../config");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const setContext = catchAsync(async (req, res) => {
    const { context } = req.body;
    if (!context) throw new ApiError("Context is required", 400);
    config.context = context + "\n";
    res.send({ context });
})

const getContext = catchAsync(async (req, res) => {
    res.send({ context: config.context });
})

module.exports = { setContext, getContext };