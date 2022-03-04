var page = require('../models/page')



const controller = {
    index: function(req, res, next) {
        res.render('index', page);
      }
}

module.exports = controller