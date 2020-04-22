const request = require('supertest');
const app = require('../../src/app');

describe('User', () => {
    it('should be able to register', async () => {
        const response = await request(app).post('/users').send({
            name: 'Test User',
            email: 'testuser@gmail.com',
            password: 'testuser123',
        });

        expect(response.body).toHaveProperty('id');
    });
});
