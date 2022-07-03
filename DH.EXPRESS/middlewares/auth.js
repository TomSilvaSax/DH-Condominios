
function isAuthenticated(req, res, next) {
    if (!req.headers.authorization) {
      return res.redirect('/login')}
    next();
  }
  
  module.exports = isAuthenticated;