const express = require('express');
const routes = express.Router();
//Llamamos al controlador.
const userControllers = require('../controllers/user.controllers');

//Create
routes.post('/Registro', userControllers.register);

//login
routes.post('/login', userControllers.login);

//All users
routes.get('/usuarios', userControllers.allUsers);

//Update
routes.put('/update/:id', userControllers.update);



//Exportamos el modulo
module.exports = routes;