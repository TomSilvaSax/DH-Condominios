var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.index);

router.get('/login', function(req, res){
    res.render('../views/dhLogin')
});

router.get('/sobre', function(req, res){
    res.render('../views/sobre')
});
router.get('/perfil', function(req, res){
    res.render('../views/perfilUsuario')
});

router.get('/cadastro', function(req, res){
    res.render('../views/cadastroUsuario')
});

router.get('/controle', function(req, res){
    res.render('../views/controleGastos')
});
router.get('/servicos', function(req, res){
    res.render('../views/servicos')
});

module.exports = router;
