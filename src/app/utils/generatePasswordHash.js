import bcrypt from 'bcryptjs';

module.exports = function generatePasswordHash(passwrod) {
    return bcrypt.hash(passwrod, 8);
};
