require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    host: process.env.ELEPHANTSQL_HOST,
    username: process.env.ELEPHANTSQL_USER,
    password: process.env.ELEPHANTSQL_PASS,
    database: process.env.ELEPHANTSQL_NAME,
    port: process.env.ELEPHANTSQL_PORT,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
