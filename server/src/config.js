require('dotenv').config();

const config = {
    port: process.env.PORT,
    store: {
        url: process.env.MONGO_URL,
        database: process.env.MONGO_DB,
        collections: {
            users: 'users',
            books: 'books',
        },
    },
};

module.exports = config;