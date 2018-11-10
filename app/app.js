const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Product = require('./routes/product');
const User = require('./routes/user');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/product',Product);
App.use('/user',User);

module.exports = App;