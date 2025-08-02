const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('autenticacion', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

async function ConnectDb() {
    try{
        await sequelize.authenticate()
        console.log('Conectado a la base de datos')
    }catch(error){
        console.error('Falla en la conexion de la base de datos.')
    }
};

ConnectDb();

module.exports = sequelize;

