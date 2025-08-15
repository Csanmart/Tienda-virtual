const sequelize = require('../config/config');
const {DataTypes} = require('sequelize');


const producto = sequelize.define('productos', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    imagen: {
        type: DataTypes.BLOB('long'),
        allowNull: false
    },
    nombre:{
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    precio:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    descripcion:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado:{
        type: DataTypes.ENUM('Disponible', 'Agotado'), 
        defaultValue: 'Disponible',
        allowNull: false,
    }
},
{   
    tableName: 'productos',
    timestamps: false
});

module.exports = producto;


