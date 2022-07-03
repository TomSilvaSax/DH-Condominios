module.exports = (sequelize, dataType) => {

  const Tipo_Consumo = sequelize.define('Tipo_Consumo', {
    id_tipo_consumo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    Descricao: {
      type: Sequelize.STRING,
    }
  }, {
    tableName: "Tipo_Consumo",
    timestamps: true
  });

  Tipo_Consumo.associate = function (models) {
    Tipo_Consumo.hasMany(models.Consumo, {
      foreignKey: 'id_tipo_consumo',
      otherKey: 'id_consumo'
    });

    Tipo_Consumo.hasOne(models.Valores_Taxas, {
      foreignKey: 'id_tipo_consumo',
      as: "",
      otherKey: 'id_valores_taxas'
    })
  };

}



return Tipo_Consumo;