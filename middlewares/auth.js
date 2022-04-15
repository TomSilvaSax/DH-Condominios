
function isAuthenticated(req, res, next) {
    if (!req.headers.authorization) {
      return res.redirect('../views/login')}
    next();
  }
  
  module.exports = isAuthenticated;