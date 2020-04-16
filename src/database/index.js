// import Sequelize from 'sequelize';

// import User from '../app/models/User';

// import databaseConfig from '../config/database';

const Sequelize = require('sequelize');

const User = require('../app/models/User');

const databaseConfig = require('../config/database');

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map((model) => model.init(this.connection));
    }
}

// export default new Database();
module.exports = new Database();
