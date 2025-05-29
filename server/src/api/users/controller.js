const { UsersService } = require('./service');

class UsersController {
    static async login(req, res) {
        const { password } = req.query;

        const data = await UsersService.login({ password });
        res.json({ data });
    }
}

module.exports = { UsersController };