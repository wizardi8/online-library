const express = require('express');

const { usersApiRouter } = require('./users');
const { booksApiRouter } = require('./books');

const router = express.Router();

router.use('/users', usersApiRouter);
router.use('/books', booksApiRouter);

module.exports = router;