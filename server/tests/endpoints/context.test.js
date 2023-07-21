const app = require("../../express/app");
const request = require('supertest');
const config = require("../../express/config");

describe('Context endpoint', () => {
    it('should return error for missing parameters', async () => {
        const response = await request(app).post('/context');

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Context is required");
    });

    it('should return a formated text message', async () => {
        const response = await request(app).post('/context').send({
            context: "Hello!"
        });

        expect(response.status).toBe(200);
        expect(response.body.context).toBeTruthy();
    });

    it('should return the current context', async () => {
        config.context = "current context"
        const response = await request(app).get('/context');

        expect(response.status).toBe(200);
        expect(response.body.context).toEqual("current context");
    });
});