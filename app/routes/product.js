const express = require('express');
const ProductCtrl = require('../controllers/ProductController');

const Router = express.Router();

Router.get('/',ProductCtrl.index) // api.com/product/ Index: Listar todos los productos
      .post('/',ProductCtrl.create)   // api.com/product/ Create: Crear un nuevo producto
      .get('/:key/:value',ProductCtrl.find,ProductCtrl.show)    // api.com/product/category/Hogar Show: Muestra un producto en específico
      .put('/:key/:value',ProductCtrl.find,ProductCtrl.update)    // api.com/product/name/SamsungGalaxy Update: Actualizar un producto en especifico
      .delete('/:key/:value',ProductCtrl.find,ProductCtrl.remove);// api.com/product/name/SamsungGalaxy

module.exports = Router;