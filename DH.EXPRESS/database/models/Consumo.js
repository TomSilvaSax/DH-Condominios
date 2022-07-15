module.exports = (sequelize, dataType) => {

  const Consumo = sequelize.define('Consumo', {
    id_consumo: {
      type: dataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Data_Leitura: {
      type: dataType.DATE,
    },

    Consumo: {
      type: dataType.FLOAT,
    },

    Leitura_Inicial: {
      type: dataType.DATE,
    },

    Leitura_Final: {
      type: dataType.DATE,
    },

    id_tipo_consumo: {
      type: dataType.INTEGER,
      primaryKey: true,
      
    },

    id_usuario: {
      type: dataType.INTEGER,
      primaryKey: true,
     
    }
  }, {
    tableName: "Consumo",
    timestamps: true
  });

  Consumo.associate = function (models) {
    Consumo.belongsTo(models.Usuario, {
      foreignKey: 'id_consumo',
      otherKey: 'id_usuario'
    });

    Consumo.belongsTo(models.Tipo_Consumo, {
      foreignKey: 'id_consumo',
      otherKey: 'id_tipo_consumo'
    });

    Consumo.hasOne(models.Fatura_Itens, {
      foreignKey: 'id_consumo',
      otherKey: 'id_fatura_itens'
    })
  };
  return Consumo;

}

