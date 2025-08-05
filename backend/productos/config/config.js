const {Sequelize} = require('sequelize');

var sequelize = new Sequelize('productos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

async function connect() {
    try{
        await sequelize.authenticate()
        console.log(sequelize, "Conectado a la base de datos");        
    }catch(error){
        console.log('Error conectandose a la base de datos....');
    }
};

connect();

module.exports = sequelize;