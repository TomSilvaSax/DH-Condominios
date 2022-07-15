module.exports = (sequelize, dataType) => {

  const Fatura = sequelize.define('Fatura', {
    id_fatura: {
      type: dataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    Vencimento: {
      type: dataType.DATE,
    },

    Multa_Atraso: {
      type: dataType.FLOAT,
    },

    Valor: {
      type: dataType.FLOAT,
    },

  },
    {
      tableName: "Fatura",
      timestamps: true
    });

  Fatura.associate = function (models) {
    Fatura.belongsTo(models.Usuario, {
      foreignKey: 'id_fatura',
      otherKey: 'id_usuario'
    });

    Fatura.hasMany(models.Fatura_Itens, {
      foreignKey: 'id_fatura',
      otherKey: 'id_fatura_itens'
    })
  };

  return Fatura;
}



