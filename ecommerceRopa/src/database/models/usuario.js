'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Usuario.hasMany(models.domicilioId, {
        foreignKey: {
          name: 'domicilioId',
          allowNull: false
        }
      })
  };

  Usuario.init({
    name: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    usuario: DataTypes.STRING,
    domicilioId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'domicilio',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};