var page = require('../models/page')
const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs')


let usuariosjson = path.join('usuarios.json')
const controller = {
    index: function(req, res, next) { res.render('index', page);},
   
    registroFrom: (req, res,)=>{
      res.render('cadastroUsuario',{ recMenu: req.session.recMenu, rota: "cadastro" })
         },
       salvarForm: (req, res)=>{
       // let listaDeErros = validationResult(req);

        //if(listaDeErros.isEmpty()){
            let {nome, CPF, email, Apartamento, Bloco, Observação } = req.body;
            let {files} = req;
            let senhaC = bcrypt.hashSync('12345678', 10)
            let usuario = JSON.stringify({nome, CPF, email, Apartamento, Bloco, senha:senhaC ,Observação})
            
            fs.writeFileSync(usuariosjson, usuario)
            res.send('Usuario cadastrado com sucesso!')
       // } else {
          //  res.render('cadastroUsuario', {erros:listaDeErros})
           //    }
     },

     loginForm: (req, res) => {
      res.render('dhLogin')
    },
  
    logarUsuario: (req, res) => {
    let {email, senha, logado} = req.body;
    let usuarioSalvo  = fs.readFileSync(usuariosjson, {encoding: 'utf-8'});
    usuarioSalvo = JSON.parse(usuarioSalvo);
    
           if(email != usuarioSalvo.email){
             return res.send('Usuario invalido!')
            }
            if(!bcrypt.compareSync(senha, usuarioSalvo.senha)){
              return res.send('Senha invalida!')
            }
              if(logado != undefined){
              res.cookie('logado', usuarioSalvo.email, {maxAge:20400})
            };
              req.session.usuario = usuarioSalvo;
  
                 res.redirect('/perfil' ,{usuario:req.session.usuario});
  },

      }
    
module.exports = controller