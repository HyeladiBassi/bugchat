const ErrorBuilder = require("../utils/ErrorBuilder");

const errorMiddleware = async (err, req, res, next) => {
    const message = err.message || "INTERNAL_SERVER_ERROR";
    const statusCode = err.statusCode || 500;
    
    const error = new ErrorBuilder(statusCode, message).build();

    res.status(error.statusCode).json(error);
}

module.exports = errorMiddleware;