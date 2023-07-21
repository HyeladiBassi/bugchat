const ErrorBuilder = require("./ErrorBuilder")

const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(err => {
        const message = err.message || "INTERNAL_SERVER_ERROR";
        const statusCode = err.statusCode || 500;
        
        const error = new ErrorBuilder(statusCode, message).build();

        res.status(error.statusCode).json(error);
    });
}

module.exports = catchAsync;