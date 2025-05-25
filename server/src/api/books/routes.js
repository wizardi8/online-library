const express = require('express');
const { BooksController } = require('./controller');
const { requestHandler } = require('../../handlers/request');

const router = express.Router();

router.get('/', requestHandler(BooksController.getAll));

router.get('/:id', requestHandler(BooksController.get));

router.put('/:id', requestHandler(BooksController.update));

router.post('/', requestHandler(BooksController.create));

router.delete('/:id', requestHandler(BooksController.delete));

module.exports = router;
