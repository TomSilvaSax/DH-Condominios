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


module.exports = router;
