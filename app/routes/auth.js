const express = require('express');
const AuthCtrl = require('../controllers/AuthController');
const Router = express.Router();

Router.post('/login',AuthCtrl);

module.exports = Router;