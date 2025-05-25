const { MongoDB } = require('../../MongoDB');

class UsersModel {
    static getAll() {
        return MongoDB.getInstance()?.collections.users.find().toArray();
    }

    static get({ id }) {
        return MongoDB.getInstance()?.collections.users.findOne({ id });
    }

    static create(data) {
        return MongoDB.getInstance()?.collections.users.insertOne(data);
    }
}

module.exports = { UsersModel };