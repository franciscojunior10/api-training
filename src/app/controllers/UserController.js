import User from '../models/User';

class UserController {
    async store(req, res) {
        const emailExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (emailExists) {
            return res.status(400).json({ error: 'email already exists.' });
        }

        const { id, name, email } = await User.create(req.body);

        return res.json({
            id,
            name,
            email,
        });
    }
}

export default new UserController();
