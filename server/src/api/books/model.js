const { MongoDB } = require('../../MongoDB');

class BooksModel {
    static getAll() {
        return MongoDB.getInstance()?.collections.books.find().toArray();
    }

    static get({ id }) {
        return MongoDB.getInstance()?.collections.books.findOne({ id });
    }

    static update({ id, data }) {
        return MongoDB.getInstance()?.collections.books.updateOne({ id }, { $set: data });
    }

    static create(data) {
        return MongoDB.getInstance()?.collections.books.insertOne(data);
    }

    static delete({ id }) {
        return MongoDB.getInstance()?.collections.books.deleteOne({ id });
    }
}

module.exports = { BooksModel };