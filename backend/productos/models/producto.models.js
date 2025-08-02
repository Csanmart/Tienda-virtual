const sequelize = require('../config/config');
const {DataType, DataTypes} = require('sequelize');


const producto = sequelize.define('productos', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    img: {
        type: DataTypes.BLOB
    }
})