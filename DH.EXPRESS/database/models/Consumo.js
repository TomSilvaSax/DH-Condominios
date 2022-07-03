module.exports = (sequelize, dataType) => {

  const Consumo = sequelize.define('Consumo', {
    id_consumo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Data_Leitura: {
      type: Sequelize.DATE,
    },

    Consumo: {
      type: Sequelize.FOLAT,
    },

    Leitura_Inicial: {
      type: Sequelize.DATE,
    },

    Leitura_Final: {
      type: Sequelize.DATE,
    },

    id_tipo_consumo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    id_usuario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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

}

return Consumo;