var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")
const auth = require('../middlewares/auth');
const cookieLogin = require('../middlewares/cookieLogin');

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('index',);
});

router.get('/sair', function (req, res, next) {
    res.render('sair',);
});
router.get('/anuncios', cookieLogin, function (req, res, next) {
    res.render('anuncios',);
});
router.get('/ValeIgapo', cookieLogin, function (req, res, next) {
    res.render('ValeIgapo',);
});
router.get('/JardinOliveiras', cookieLogin, function (req, res, next) {
    res.render('JardinOliveiras',);
});
router.get('/BoaVista', cookieLogin, function (req, res, next) {
    res.render('BoaVista',);
});
router.get('/AlphaVille', cookieLogin, function (req, res, next) {
    res.render('AlphaVille',);
});
router.get('/GreenGraden', cookieLogin, function (req, res, next) {
    res.render('GreenGraden',);
});
router.get('/reservas', cookieLogin, function (req, res) {
    res.render('../views/reservas', { recMenu: req.session.recMenu, rota: "reservas" })
});

router.get('/', indexController.index);
router.get('/cadastro', cookieLogin, indexController.registroFrom);
router.post('/cadastro', cookieLogin, indexController.salvarForm);
router.get('/all', cookieLogin, indexController.indexAll);
router.get('/:id', cookieLogin, indexController.indexById);
router.get('/nome/:id', cookieLogin, indexController.indexUsuario);

router.get('/login', indexController.loginForm);
router.post('/login', indexController.logarUsuario);

router.get('/login', function (req, res) {
    res.render('../views/dhLogin')
});

router.get('/sobre', function (req, res) {
    res.render('../views/sobre')
});
router.get('/perfil', cookieLogin, function (req, res) {
    res.render('../views/perfilUsuario', { recMenu: req.session.recMenu, rota: "perfil" })
});

//router.get('/cadastro', function(req, res){
// res.render('../views/cadastroUsuario')
//});

router.get('/controle', cookieLogin, function (req, res) {
    res.render('../views/controleGastos', { recMenu: req.session.recMenu, rota: "controle" })
});
router.get('/servicos', function (req, res) {
    res.render('../views/servicos')
});

router.get('/rec-Menu/:rotas', (req, res) => {
    req.session.recMenu = !req.session.recMenu;
    console.log(req.params)
    res.cookie('recMenu', req.session.recMenu);
    res.redirect('/' + req.params.rotas);
});


module.exports = router;
