'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Consumo", {
      id_Consumo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Data_Leitura: {
        type: Sequelize.DATE,
      },

      Consumo: {
        type: Sequelize.FLOAT,
      },

      Leitura_Inicial: {
        type: Sequelize.DATE,
      },

      Leitura_Final: {
        type: Sequelize.DATE,
      },

      id_Tipo_Consumo: {
        type: Sequelize.INTEGER,
        refences: { model: "Tipo_Consumo", key: "id_Tipo_Consumo" },

      },

      id_Usuario: {
        type: Sequelize.INTEGER,
        refences: { model: "Usuario", key: "id_Usuario" },

      },

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Consumo");
  },
};
