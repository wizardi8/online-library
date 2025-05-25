const { v4: uuid4 } = require('uuid');
const { UsersModel } = require('./model');

class UsersService {
    static async getAll() {
        return UsersModel.getAll();
    }

    static async get({ id }) {
        return UsersModel.get({ id });
    }

    static async create({ data = {} }) {
        const id = uuid4();
        return UsersModel.create({ ...data, id });
    }
}

module.exports = { UsersService };