// import User from '../models/User';
const User = require('../models/User');

class UserController {
    async store(req, res) {
        const emailExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (emailExists) {
            return res.status(400).json({ error: 'Email already exists.' });
        }

        const { id, name, email } = await User.create(req.body);

        return res.json({
            id,
            name,
            email,
        });
    }

    async update(req, res) {
        return res.json({ ok: true });
    }
}

// export default new UserController();
module.exports = new UserController();
