module.exports = (sequelize, dataType) => {

  const Fatura = sequelize.define('Fatura', {
    id_fatura: {
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

}



return Fatura;