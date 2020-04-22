const database = require('../../src/database');

module.exports = function truncate() {
    return Promise.all(
        Object.keys(database.connection.models).map((key) => {
            return database.connection.models[key].destroy({
                truncate: true,
                force: true,
            });
        })
    );
};
