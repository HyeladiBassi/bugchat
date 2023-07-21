const ErrorBuilder = require("../../express/utils/ErrorBuilder");

describe('ErrorBuilder Class', () => {
    it('should construct an instance with the provided statusCode and message', () => {
        const statusCode = 500;
        const message = "INTERNAL_SERVER_ERROR";

        const builder = new ErrorBuilder(statusCode, message);

        expect(builder.message).toBe(message);
        expect(builder.statusCode).toBe(statusCode);
    });

    it('should set message when withMessage() method is called', () => {
        const message = "INTERAL_SERVER_ERROR";

        const builder = new ErrorBuilder();
        builder.withMessage(message)

        expect(builder.message).toBe(message);
        expect(builder.statusCode).toBe(undefined);
    })

    it('should set statusCode when withMessage() method is called', () => {
        const statusCode = 500;

        const builder = new ErrorBuilder();
        builder.withStatusCode(statusCode)

        expect(builder.message).toBe(undefined);
        expect(builder.statusCode).toBe(statusCode);
    })

    it('should return error response when build() method is called', () => {
        const statusCode = 500;
        const message = "INTERNAL_SERVER_ERROR";

        const builder = new ErrorBuilder(statusCode, message);
        const result = builder.build()

        expect(result).toEqual({
            status: 'ERROR',
            statusCode: 500,
            message: "INTERNAL_SERVER_ERROR"
        });
    })
})