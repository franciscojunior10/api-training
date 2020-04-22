require('../bootstrap');
require('dotenv/config');

module.exports = {
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.ELEPHANTSQL_HOST,
    username: process.env.ELEPHANTSQL_USER,
    password: process.env.ELEPHANTSQL_PASS,
    database: process.env.ELEPHANTSQL_NAME,
    port: process.env.ELEPHANTSQL_PORT,
    storage: './__tests__/database.sqlite',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
