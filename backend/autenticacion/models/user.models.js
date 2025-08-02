const { DataTypes, BOOLEAN } = require('sequelize');
const sequelize = require('../config/config');

const Usuario = sequelize.define('usuarios', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  admin: {
    type: BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'usuarios',
  timestamps: false,
});

module.exports = Usuario;

