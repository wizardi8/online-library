const { UsersService } = require('./service');

class UsersController {
    static async getAll(req, res) {
        const data = await UsersService.getAll();
        res.json({ data });
    }

    static async get(req, res) {
        const { id } = req.params;

        const data = await UsersService.get({ id });
        res.json({ data });
    }

    static async create(req, res) {
        const data = await UsersService.create({ data: req.body });
        res.json({ data });
    }
}

module.exports = { UsersController };