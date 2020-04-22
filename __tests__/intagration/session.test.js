const request = require('supertest');
const app = require('../../src/app');

const truncate = require('../util/truncate');

describe('Session', () => {
    afterEach(async () => {
        await truncate();
    });

    it('should be able to create session', async () => {
        await request(app).post('/users').send({
            name: 'Test User',
            email: 'testuser@gmail.com',
            password: 'testuser123',
        });

        const response = await request(app).post('/sessions').send({
            email: 'testuser@gmail.com',
            password: 'testuser123',
        });
        expect(response.body).toHaveProperty('token');
    });

    it('should be able to verify user is not authorized', async () => {
        const response = await request(app).post('/sessions').send({
            email: 'testuser1@gmail.com',
            password: 'testuser123',
        });
        expect(response.status).toBe(401);
    });

    it('should be able to verify password', async () => {
        const response = await request(app).post('/sessions').send({
            email: 'testuser@gmail.com',
            password: '123',
        });
        expect(response.status).toBe(401);
    });
});
