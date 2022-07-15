var page = require('../models/page')
const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs')

const UsuarioService = require('../service/UsuarioService')


let usuariosjson = path.join('usuarios.json')
const controller = {

  indexAll: async (request, response) => {
    const Usuario = await UsuarioService.ListUsuario();
    return response.json(Usuario);
  },

  indexUsuario: async (request, response) => {  
    const { name } = request.query;

    
    const Usuario = await UsuarioService.ListUsuario(name);
   
 
    return response.json(Usuario)
  },           

  indexById: async (request, response) => {
    console.log("response.params:", response.params)
    const { id } = response.params

    const Usuario = await UsuarioService.getUsuarioById(id);
    return res.json(Usuario)
  },

  index: function (req, res, next) { res.render('index', page); },

  registroFrom: async (req, res,) => {
    res.render('cadastroUsuario', { recMenu: req.session.recMenu, rota: "cadastro" })
  },

  
  salvarForm: async (req, res) => {
    
    let { nome, CPF, email, Apartamento, Bloco, Observação } = req.body;
    let { files } = req;
    let senhaC = bcrypt.hashSync('12345678', 10)


    let usuario = await UsuarioService({ nome, CPF, email, Apartamento, Bloco, senha: senhaC, Observação })
    res.send('Usuario cadastrado com sucesso!')
    return response.json(usuario);

    // fs.writeFileSync(usuariosjson, usuario)

    
    // } else {
    //  res.render('cadastroUsuario', {erros:listaDeErros})
    //    }
  },

  loginForm: (req, res) => {
    res.render('dhLogin')
  },

  logarUsuario: async (req, res) => {

    let { email, senha, logado } = req.body;
    let usuarioSalvo = fs.readFileSync(usuariosjson, { encoding: 'utf-8' });
    usuarioSalvo = JSON.parse(usuarioSalvo);

    if (email != usuarioSalvo.email) {
      return res.send('Usuario invalido!')
    }
    if (!bcrypt.compareSync(senha, usuarioSalvo.senha)) {
      return res.send('Senha invalida!')
    }
    if (logado != undefined) {
      res.cookie('logado', usuarioSalvo.email, { maxAge: 20400 })
    };
    req.session.usuario = usuarioSalvo;

    res.redirect('/perfil');


  },

}

module.exports = controller