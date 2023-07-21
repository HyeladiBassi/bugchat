const request = require('supertest');
const app = require('../../express/app');

describe('Chat endpoint', () => {
    it('should return error for missing parameters', async () => {
        const response = await request(app).post('/chat');

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Message is required");
    });

    it('should return a formated text message', async () => {
        const response = await request(app).post('/chat').send({
            message: "Hello!"
        });

        expect(response.status).toBe(200);
        expect(response.body.result).toBeTruthy();
    });
});