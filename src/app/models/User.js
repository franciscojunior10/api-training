import Sequelize, { Model } from 'sequelize';

import generatePasswordHash from '../utils/generatePasswordHash';

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
}

export default User;
