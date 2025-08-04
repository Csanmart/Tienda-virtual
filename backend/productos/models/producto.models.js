const sequelize = require('../config/config');
const {DataTypes} = require('sequelize');


const producto = sequelize.define('productos', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    img: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio:{
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    estado:{
        type: DataTypes.ENUM('Disponible', 'Vendido'), 
        defaultValue: 'disponible',
        allowNull: false,
    },
    oferta:{
        type: DataTypes.ENUM('Donacion', 'Venta'),
        defaultValue: 'Donacion'
    },
},
{   
    tableName: 'productos',
    timestamps: true
});

module.exports = producto;