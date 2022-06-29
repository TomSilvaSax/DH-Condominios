module.exports = (sequelize, dataType)=> {

    const Fatura_Itens = sequelize.define('Fatura_Itens', {
        id_fatura_itens: {
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
    
          id_tipo_consumo: {
            type: Sequelize.LONG,
            primaryKey: true,
            autoIncrement: true,
          },
    
          id_fatura: {
            type: Sequelize.LONG,
            primaryKey: true,
            autoIncrement: true,
        },
        
    },
   {
    tableName: "Fatura_Itens",
    timestamps: true
  });
  Fatura_Itens.associate = function(models) {
    Fatura_Itens.hasOne(models.Consumo, {
      foreignKey: 'id_fatura_itens',
      otherKey: 'id_consumo'
    });
        Fatura_Itens.belongsTo(models.Fatura, {
        foreignKey: 'id_fatura_itens',
        otherKey: 'id_fatura'
        });
    };
}

return Fatura_Itens;