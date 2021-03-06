'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Talle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Talle.belongsTo(models.prodcuto)
    }
  };
  Talle.init({
    tipo: DataTypes.STRING,
    medidas: DataTypes.STRING,
    productoId: DataTypes.INTEGER,
    producto_categoriaid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Talle',
  });
  return Talle;
};