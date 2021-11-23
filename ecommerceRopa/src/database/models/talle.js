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
      // define association here
    }
  };
  Talle.init({
    tipo: DataTypes.STRING,
    medidas: DataTypes.STRING,
    productoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'producto',
        key: 'id'
      }
    },
    producto_categoriaid: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categoria',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Talle',
  });
  return Talle;
};