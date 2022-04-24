var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")
const auth = require('../middlewares/auth');
const DhValidator = require('../middlewares/DhValidator');


/* GET home page. */

router.get('/', function(req, res, next) {
res.render('index',  { recMenu: req.session.recMenu });
});
router.get('/', indexController.index);
router.get('/cadastro', indexController.registroFrom);
router.post('/cadastro', indexController.salvarForm);

router.get('/login', indexController.loginForm);
router.post('/login', indexController.logarUsuario);

router.get('/login', function(req, res){
    res.render('../views/dhLogin')
});

router.get('/sobre', function(req, res){
    res.render('../views/sobre')
});
router.get('/perfil', function(req, res){
    res.render( '../views/perfilUsuario')
});

//router.get('/cadastro', function(req, res){
   // res.render('../views/cadastroUsuario')
//});

router.get('/controle', auth, function(req, res){
    res.render('../views/controleGastos')
});
router.get('/servicos', function(req, res){
    res.render('../views/servicos')
});

router.get('/rec-Menu', (req, res) => {
    req.session.recMenu = !req.session.recMenu;
   res.cookie('recMenu', req.session.recMenu);
   res.redirect('/controle');
  });

  
module.exports = router;
