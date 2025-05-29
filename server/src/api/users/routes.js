const express = require('express');
const { UsersController } = require('./controller');
const { requestHandler } = require('../../handlers/request');

const router = express.Router();

router.get('/login', requestHandler(UsersController.login));

module.exports = router;
