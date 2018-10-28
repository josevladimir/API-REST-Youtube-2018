const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Product = require('./routes/product');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/product',Product);

module.exports = App;