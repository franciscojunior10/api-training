// import Sequelize, { Model } from 'sequelize';

// import bcrypt from 'bcryptjs';

// import generatePasswordHash from '../utils/generatePasswordHash';

const Sequelize = require('sequelize');
const { Model } = require('sequelize');

const bcrypt = require('bcryptjs');

const generatePasswordHash = require('../utils/generatePasswordHash');

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await generatePasswordHash(user.password);
            }
        });

        return this;
    }

    ckeckPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

// export default User;
module.exports = User;
