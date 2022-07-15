module.exports = (sequelize, dataType)=> {

    const Valores_Taxas = sequelize.define('Valores_Taxas', {
        id_valores_taxas: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          
          Taxa_Condominio: {
            type: dataType.STRING,
          },
    
          Taxa_M3: {
            type: dataType.STRING,
          },
          
          id_tipo_consumo: {
            type: dataType.STRING,
            primaryKey: true,
           
        }
    }, {
      tableName: "Valores_Taxas",
      timestamps: true
    });

    Valores_Taxas.associate = function(models) {
      Valores_Taxas.hasOne(models.Tipo_Consumo, {
        foreignKey: 'id_valores_taxas',
        as: "ValoresTaxas",
        otherKey: 'id_tipo_consumo'
    });
};
return Valores_Taxas;
}

