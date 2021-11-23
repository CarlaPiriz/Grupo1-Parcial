'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      factura.belongsTo(usuario, { as: 'usuarioid', constraints: false })


    }
  };
  Factura.init({
    fecha: DataTypes.STRING,
    tipo: DataTypes.STRING,
    total: DataTypes.STRING,
    usuarioId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    puntodeventaId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'puntodeventa',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Factura',
  });
  return Factura;
};