'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Valores_Taxas", {
      id_Valores_Taxas: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      Taxas_Condominio: {
        type: Sequelize.FLOAT,
      },

      Taca_M3: {
        type: Sequelize.FLOAT,
      },
      
      id_Tipo_Consumo: {
        type: Sequelize.INTEGER,
        refences: { model: "Tipo_Consumo", key: "id_Tipo_Consumo" },
      },
      
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Valores_Taxas");
  },
};
