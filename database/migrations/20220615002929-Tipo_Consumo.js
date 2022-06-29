'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Tipo_Consumo", {
      id_Tipo_Consumo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      Descricao: {
        type: Sequelize.STRING,
      },
      
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tipo_Consumo");
  },
};

