const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controllers');


//Ruta de getAll
router.get('/productos', productosController.getAllProductos);

//Ruta de get for id
router.get('/listaProductosPor/:id', productosController.getProductoById);

//Ruta para crear
router.post('/crearProducto', productosController.crearProducto);

//Ruta editar
router.put('/editar/:id', productosController.updateProducto);

//Ruta eliminar
router.delete('/eliminar/:id', productosController.deleteProducto);

//Exportacion del router

module.exports = router
