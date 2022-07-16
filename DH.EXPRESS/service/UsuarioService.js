const database = require("../database/models");

const UsuarioService = {
    ListUsuario: async () => {
        const Usuario = await database.Usuario.findAll();
        return Usuario;
    },
    getUsuarioByNome: async (Usuarioname) => {
        // Fazer um find usando Sequelize com WHERE name = pokemonName
        // return pokemon;
        const Usuario = await database.Usuario.findOne({
            where: {
                name: Usuarioname
            }
        });
        return Usuario;
    },

    getUsuarioById: async (id) => {

        const Usuario = await database.Usuario.findByPk(id)

        return Usuario;

    },

    ListUsuarioCPF: async (UsuarioCPF) => {

        const Usuario = await database.Usuario.findOne({
            where: {
                CPF: UsuarioCPF
            }
        });
        return Usuario;

    },
    createUsuario: async (
        name,
        CPF,
        Email,
        Apartamento,
        Bloco,
        Senha = bcrypt.hash('12345678', 10),
        Observacao
        

    ) => {
        const newUsuario = await database.Usuario.create({
            name,
            CPF,
            Email,
            Apartamento,
            Bloco,
            Senha ,
            Observacao
            
        });

        return newUsuario;
    }
}

module.exports = UsuarioService;
