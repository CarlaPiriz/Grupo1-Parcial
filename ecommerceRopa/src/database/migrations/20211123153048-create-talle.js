'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Talles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING
      },
      medidas: {
        type: Sequelize.STRING
      },
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Talles');
  }
};