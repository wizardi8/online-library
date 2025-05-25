const { BooksService } = require('./service');

class BooksController {
    static async getAll(req, res) {
        const data = await BooksService.getAll();
        res.json({ data });
    }

    static async get(req, res) {
        const { id } = req.params;

        const data = await BooksService.get({ id });
        res.json({ data });
    }

    static async update(req, res) {
        const { id } = req.params;

        await BooksService.update({ id, data: req.body });
        res.send();
    }

    static async create(req, res) {
        await BooksService.create({ data: req.body });
        res.send();
    }

    static async delete(req, res) {
        const { id } = req.params;

        await BooksService.delete({ id });
        res.send();
    }
}

module.exports = { BooksController };