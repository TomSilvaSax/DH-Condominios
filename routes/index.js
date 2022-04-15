var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")
const auth = require('../middlewares/auth');
const DhValidator = require('../middlewares/DhValidator');


/* GET home page. */
router.get('/', indexController.index);

router.get('/login', function(req, res){
    res.render('../views/dhLogin')
});

router.get('/sobre', function(req, res){
    res.render('../views/sobre')
});
router.get('/perfil', auth, function(req, res){
    res.render( '../views/perfilUsuario')
});

router.get('/cadastro', auth, function(req, res){
    res.render('../views/cadastroUsuario')
});

router.get('/controle', auth, function(req, res){
    res.render('../views/controleGastos')
});
router.get('/servicos', function(req, res){
    res.render('../views/servicos')
});

module.exports = router;
