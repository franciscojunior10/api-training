const request = require('supertest');
const bcrypt = require('bcryptjs');
const app = require('../../src/app');

const User = require('../../src/app/models/User');

const truncate = require('../util/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should verify created password_hash for each new user', async () => {
        const user = await User.create({
            name: 'Test',
            email: 'testusertest@gmail.com',
            password: 'testusertest123',
        });
        const verifyPasswordHash = await bcrypt.compare(
            'testusertest123',
            user.password_hash
        );

        expect(verifyPasswordHash).toBe(true);
    });

    it('should be able to register', async () => {
        const response = await request(app).post('/users').send({
            name: 'Test',
            email: 'testusertest@gmail.com',
            password: 'testusertest123',
        });
        expect(response.body).toHaveProperty('id');
    });

    it('should be able to register with duplicated email', async () => {
        await request(app).post('/users').send({
            name: 'Test',
            email: 'testusertest@gmail.com',
            password: 'testusertest123',
        });

        const response = await request(app).post('/users').send({
            name: 'Test',
            email: 'testusertest@gmail.com',
            password: 'testusertest123',
        });

        expect(response.status).toBe(400);
    });
});
