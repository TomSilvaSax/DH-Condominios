module.exports = (sequelize, dataType)=> {

    const Fatura_Itens = sequelize.define('Fatura_Itens', {
        id_fatura_itens: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          
          Valor_Item: {
            type: dataType.FLOAT,
          },
          
          Multa_Atraso: {
            type: dataType.FLOAT,
          },
    
          Valor: {
            type: dataType.FLOAT,
          },
    
          id_tipo_consumo: {
            type: dataType.INTEGER,
            primaryKey: true,
          
          },
    
          id_fatura: {
            type: dataType.INTEGER,
            primaryKey: true,
           
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
    return Fatura_Itens;
}

