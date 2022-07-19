var page = require('../models/page')
const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs')

const UsuarioService = require('../service/UsuarioService');
const { resourceLimits } = require('worker_threads');


let usuariosjson = path.join('usuarios.json')
const controller = {

  // Retorna Pagina
  index: function (request, response, next) { response.render('index', page); },

  registroFrom: async (request, response,) => {
    response.render('cadastroUsuario', { recMenu: request.session.recMenu, rota: "cadastro" })
  },

  //Cria Usuario
  salvarUsuario: async (request, response) => {

    let { files } = request;
     bcrypt.hashSync('12345678', 10)
      const {
        name, 
        CPF, 
        email, 
        Apartamento, 
        Bloco, 
        senha,
        Observacao
      } = request.body
  
      const Usuario = await UsuarioService.createUsuario(
       
        name, 
        CPF, 
        email, 
        Apartamento, 
        Bloco, 
        senha,
        Observacao,
      )
  
      return response.json(Usuario);
    },
  
//Lista todos Usuarios
  indexAll: async (request, response) => {
    const Usuario = await UsuarioService.ListUsuario();
    return response.json(Usuario);
  },

 //Busca Usuario pelo Id
  indexById: async (request, response) => {
    console.log("response.params:", response.params)
    const { id } = request.params

    const Usuario = await UsuarioService.getUsuarioById(id);
    return response.json(Usuario)
  },

  indexNome: async (request, response) => {
    
    const { name } = request.query

    const Usuario = await UsuarioService.getUsuarioByNome(name);
    return response.json(Usuario)
  },


  indexUsuarioCPF: async (request, response) => {  
    
    const { CPF } = request.query
    const Usuario = await UsuarioService.ListUsuarioCPF(CPF);
    return response.json(Usuario)
  },           

  // indexByCpf: async (request, response) => {
  //   console.log("response.params:", response.params)
  //   const { CPF } = request.params

  //   const Usuario = await UsuarioService.getindexByCpf(CPF);
  //   return response.json(Usuario)
  // },     

  
  

  
  // salvarForm: async (req, res) => {

  
  // bcrypt.hash('12345678', 10 , (errBcrypt, hash) => {
  //   if(errBcrypt) { return res.status(500).send({error: errBcrypt})}

  //   conn.query(
  //     "INSERT INTO Usuario ( nome, CPF, email, Apartamento, Bloco, hash, Observacao    )",
  //     [ req.body.nome,
  //       req.body.CPF,
  //       req.body.email,
  //       req.body.Apartamento,
  //       req.body.bloco,
  //       hash,
  //       req.body.Observacao
  //     ],
  //     (error, result) => {
  //       conn.releasa();
  //       if(error) { return res.status(500).send({ error: error }) }
  //       response = {
  //         mensagem: "Usuario cadastrato com sucesso",
  //         usuarioCriado: {
  //           id_usuario: resourceLimits.isertId,
  //           Nome: req.body.nome,
  //           Email: req.body.email,
  //         }
  //       }
  //     }
  //   )
  // })
  // },
  

  loginForm: (request, response) => {
    response.render('dhLogin')
  },

  logarUsuario: async (request, response) => {

    

    let { email, senha, logado } = request.body;
    let usuarioSalvo = fs.readFileSync(usuariosjson, { encoding: 'utf-8' });
    usuarioSalvo = JSON.parse(usuarioSalvo);

    if (email != usuarioSalvo.email) {
      return response.send('Usuario invalido!')
    }
    if (!bcrypt.compareSync(senha, usuarioSalvo.senha)) {
      return response.send('Senha invalida!')
    }
    if (logado != undefined) {
      response.cookie('logado', usuarioSalvo.email, { maxAge: 20400 })
    };
    request.session.usuario = usuarioSalvo;

    response.redirect('/perfil');

  },

}

module.exports = controller