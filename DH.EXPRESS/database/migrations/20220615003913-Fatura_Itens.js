'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Fatura_Itens", {
      id_Fatura_Itens: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      Valor_Item: {
        type: Sequelize.FLOAT,
      },
      
      Multa_Atraso: {
        type: Sequelize.FLOAT,
      },

      Valor: {
        type: Sequelize.FLOAT,
      },

      id_Tipo_Consumo: {
        type: Sequelize.INTEGER,
        refences: { model: "Tipo_Consumo", key: "id_Tipo_Consumo" },
      },

      id_Fatura: {
        type: Sequelize.INTEGER,
        refences: { model: "Fatura", key: "id_fatura" },
      },
      
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Fatura_Itens");
  },
};
