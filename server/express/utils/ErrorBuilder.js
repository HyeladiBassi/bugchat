class ErrorBuilder {
    constructor(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
    }

    withStatusCode(statusCode) {
        this.statusCode = statusCode;
        return this;
    }

    withMessage(message) {
        this.message = message;
        return this;
    }

    build() {
        return {
            status: 'ERROR',
            statusCode: this.statusCode,
            message: this.message
        }
    }
}

module.exports = ErrorBuilder;