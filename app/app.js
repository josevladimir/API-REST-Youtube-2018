const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Product = require('./routes/product');
const User = require('./routes/user');
const Auth = require('./routes/auth');

const AuthToken = require('./middlewares/AuthToken');

App.use(AuthToken);

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/product',Product);
App.use('/user',User);
App.use('/auth',Auth);


module.exports = App;