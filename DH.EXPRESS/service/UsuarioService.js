const database = require("../database/models");
const bcrypt = require('bcrypt');
const fs = require('fs')

const UsuarioService = {
    ListUsuario: async () => {
        const Usuario = await database.Usuario.findAll();
        return Usuario;
    },
    getUsuarioByNome: async (Usuarioname) => {
        
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
        Senha,
        Observacao


    ) => {
        const newUsuario = await database.Usuario.create(
            {
                name,
                CPF,
                Email,
                Apartamento,
                Bloco,
                Senha,
                Observacao
            });

        // const novoUsuario = new usuario({
        //     name: req.body.name,
        //     CPF: req.body.cpf,
        //     Email: req.body.Email,
        //     Apartamento: req.body.Apartamento,
        //     Bloco: req.body.Bloco,
        //     Senha: req.body.Senha,
        //     Observacao: req.body.Observacao

        // })
        // bcrypt.genSalt(10, (erro, salt) => {

        //     bcrypt.hash('12345678', salt, (erro, hash) => {
        //         if (erro) {
        //             req.flash('error_msg', "Houve um erro ao salvar senha")
        //             res.redirect('/cadastro')
        //         }
        //         novoUsuario.Senha = hash
        //     })
        // })

        return newUsuario;
    }
}

module.exports = UsuarioService;

