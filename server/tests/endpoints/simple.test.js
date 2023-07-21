const request = require('supertest');
const app = require('../../express/app');

describe('Simple endpoint', () => {
    it('should return a welcome message', async () => {
        const response = await request(app).get('/welcome');

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Welcome to the API v1');
    });
});