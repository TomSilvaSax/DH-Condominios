module.exports = (sequelize, dataType) => {

  const Usuario = sequelize.define('Usuario', {
    id_usuario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.VARCHAR,
    },
    CPF: {
      type: Sequelize.VARCHAR,
    },
    Email: {
      type: Sequelize.VARCHAR,
    },
    Apartamento: {
      type: Sequelize.VARCHAR,
    },
    Bloco: {
      type: Sequelize.VARCHAR,
    },
    Observacao: {
      type: Sequelize.VARCHAR,
    },
    Senha: {
      type: Sequelize.VARCHAR,
    },

    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  }, {
    tableName: "Usuario",
    timestamps: true
  });

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Consumo, {
      foreignKey: 'id_usuario',
      as: "Usuario",
      otherKey: 'id_consumo'
    });

    Usuario.hasMany(models.Fatura, {
      foreignKey: 'id_usuario',
      as: "Fatura",
      otherKey: 'id_fatura'
    });
  };
}

return Usuario;