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
        type: Sequelize.STRING,
      },
      CPF: {
        type: Sequelize.INTEGER,
      },
      Email: {
        type: Sequelize.STRING,
      },
      Apartamento: {
        type: Sequelize.INTEGER,
      },
      Bloco: {
        type: Sequelize.INTEGER,
      },
      Observacao: {
        type: Sequelize.STRING,
      },
      Senha: {
        type: Sequelize.STRING,
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