module.exports = (sequelize, dataType) => {

  const Usuario = sequelize.define('Usuario', {
    id_usuario: {
      type: dataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataType.STRING,
    },
    CPF: {
      type: dataType.STRING,
    },
    Email: {
      type: dataType.STRING,
    },
    Apartamento: {
      type: dataType.STRING,
    },
    Bloco: {
      type: dataType.STRING,
    },
    Observacao: {
      type: dataType.STRING,
    },
    Senha: {
      type: dataType.STRING,
    },

    createdAt: {
      type: dataType.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: dataType.DATE,
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

  return Usuario;
}

