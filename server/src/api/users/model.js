const { MongoDB } = require('../../MongoDB');

class UsersModel {
    static getAuthData() {
        return MongoDB.getInstance()?.collections.authData.findOne();
    }
}

module.exports = { UsersModel };