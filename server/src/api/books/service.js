const { BooksModel } = require('./model');

class BooksService {
    static async getAll() {
        return BooksModel.getAll();
    }

    static async get({ id }) {
        return BooksModel.get({ id });
    }

    static async update({ id, data }) {
        return BooksModel.update({ id, data });
    }

    static async create({ data = {} }) {
        return BooksModel.create(data);
    }

    static async delete({ id }) {
        return BooksModel.delete({ id });
    }
}

module.exports = { BooksService };