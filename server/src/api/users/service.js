const { UsersModel } = require('./model');

class UsersService {
    static async login({ password }) {
        const authData = await UsersModel.getAuthData();
        const { password: dbPassword } = authData || {};

        return password === dbPassword;
    }
}

module.exports = { UsersService };