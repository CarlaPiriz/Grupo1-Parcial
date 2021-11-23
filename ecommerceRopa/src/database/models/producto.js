'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Producto.init({
    stock: DataTypes.STRING,
    desc: DataTypes.STRING,
    precio: DataTypes.STRING,
    nombre: DataTypes.STRING,
    prodimg: DataTypes.STRING,
    categoriaId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categoria',
        key: 'id'
      }
    },
    marcaid: {
      type: Sequelize.INTEGER,
      references: {
        model: 'marca',
        key: 'id'
      }
    },
    detallefacturaId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'detallefactura',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};