// const database = require("../database/models");

const UsuarioService = {
    ListUsuario: async () => {
        const Usuario = await database.Usuario.findAll();
        return Usuario;
    },
    ListUsuarioData: async (UsuarioName) => {
        // Fazer um find usando Sequelize com WHERE name = pokemonName
        // return pokemon;
        const Usuario = await database.Usuario.findOne({
            where: {
                name: UsuarioName
            }
        });
        return Usuario;
    },

    getUsuarioById: async (id) => {

        const Usuario = await database.Usuario.findByPk(id)

        return Usuario;

    },

    createUsuario: async (
        name,
        CPF,
        Email,
        Apartamento,
        Bloco,
        Observacao,
        Senha

    ) => {
        const newUsuario = await database.Usuario.create({
            name,
            description,
            CPF,
            Email,
            Apartamento,
            Bloco,
            Observacao,
            Senha
        });

        return newUsuario;
    }
}

module.exports = UsuarioService;
