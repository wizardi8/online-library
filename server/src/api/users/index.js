const { UsersModel } = require('./model');
const { UsersService } = require('./service');
const usersApiRouter = require('./routes');

module.exports = {
    UsersModel,
    UsersService,
    usersApiRouter,
};
