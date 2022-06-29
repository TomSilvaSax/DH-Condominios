'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Fatura", {
      id_Fatura: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      Vencimento: {
        type: Sequelize.DATE,
      },

      Multa_Atraso: {
        type: Sequelize.FLOAT,
      },
      
      Valor: {
        type: Sequelize.FLOAT,
      },
      
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Fatura");
  },
};