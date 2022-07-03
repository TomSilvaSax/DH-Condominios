"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Usuario", {
      id_Usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.VARCHAR,
      },
      CPF: {
        type: Sequelize.VARCHAR,
      },
      Email: {
        type: Sequelize.VARCHAR,
      },
      Apartamento: {
        type: Sequelize.VARCHAR,
      },
      Bloco: {
        type: Sequelize.VARCHAR,
      },
      Observacao: {
        type: Sequelize.VARCHAR,
      },
      Senha: {
        type: Sequelize.VARCHAR,
      },
      
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Usuario");
  },
};