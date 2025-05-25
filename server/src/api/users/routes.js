const express = require('express');
const { UsersController } = require('./controller');
const { requestHandler } = require('../../handlers/request');

const router = express.Router();

router.get('/', requestHandler(UsersController.getAll));

router.get('/:id', requestHandler(UsersController.get));

router.post('/', requestHandler(UsersController.create));

module.exports = router;
