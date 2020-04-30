// import 'dotenv/config';

// import jwt from 'jsonwebtoken';

// import User from '../models/User';

// import configAuth from '../../config/auth';

require('dotenv/config');

const jwt = require('jsonwebtoken');

const Yup = require('yup');

const User = require('../models/User');

const configAuth = require('../../config/auth');

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails.' });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'User not autorized.' });
        }

        if (!(await user.ckeckPassword(password))) {
            return req
                .status(401)
                .json({ error: 'Password not corresponded.' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, configAuth.secret, {
                expiresIn: configAuth.expiresIn,
            }),
        });
    }
}

// export default new SessionController();
module.exports = new SessionController();
