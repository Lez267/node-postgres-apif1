'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PilotosF1', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      equipos: {
        type: Sequelize.STRING
      },
      numeros: {
        type: Sequelize.STRING
      },
      nacionalidad: {
        type: Sequelize.STRING
      },
      victorias: {
        type: Sequelize.INTEGER
      },
      podios: {
        type: Sequelize.INTEGER
      },
      campeonatos: {
        type: Sequelize.INTEGER
      },
      debut: {
        type: Sequelize.DATE
      },
      puntos_totales: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('PilotosF1s');
  }
};
