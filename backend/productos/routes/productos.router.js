const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controllers');


//Ruta de get
router.get('/listaProductos', productosController.getAllProductos);

//Ruta de get for id
router.get('/listProductosPor/:id', productosController.getProductoById);

//Ruta para crear
router.post('/crearProducto', productosController.crearProducto);


module.exports = router
