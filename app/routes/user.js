const express = require('express');
const UserCtrl = require('../controllers/UserController');

const Router = express.Router();

Router.get('/',UserCtrl.index) // api.com/product/ Index: Listar todos los productos
      .post('/',UserCtrl.create)   // api.com/product/ Create: Crear un nuevo producto
      .get('/:key/:value',UserCtrl.find,UserCtrl.show)    // api.com/product/category/Hogar Show: Muestra un producto en específico
      .put('/:key/:value',UserCtrl.find,UserCtrl.update)    // api.com/product/name/SamsungGalaxy Update: Actualizar un producto en especifico
      .delete('/:key/:value',UserCtrl.find,UserCtrl.remove);// api.com/product/name/SamsungGalaxy

module.exports = Router;