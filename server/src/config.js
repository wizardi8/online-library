require('dotenv').config();

const config = {
    port: process.env.PORT,
    store: {
        url: process.env.MONGO_URL,
        database: process.env.MONGO_DB,
        collections: {
            authData: 'authData',
            books: 'books',
        },
    },
};

module.exports = config;