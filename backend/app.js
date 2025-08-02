const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const sequelize = require('./autenticacion/config/config');
const userRouter = require('./autenticacion/routes/user.routes');

//Configuracion de cors
app.use(cors());
//Configuracion de express 
app.use(express.json());
//configuracion de las rutas
app.use('/api'  , userRouter);
//Conexion del servidor
app.listen(port,()=>{
    console.log('Conectado al: http://localhost:3000');
});


