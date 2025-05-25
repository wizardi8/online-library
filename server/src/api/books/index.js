const { BooksModel } = require('./model');
const { BooksService } = require('./service');
const booksApiRouter = require('./routes');

module.exports = {
    BooksModel,
    BooksService,
    booksApiRouter,
};
