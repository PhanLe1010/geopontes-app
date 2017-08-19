var jwt = require('jsonwebtoken');
var middlewareObject = {};
//==================================================
//Middleware
//==================================================
middlewareObject.isLoggedIn = function(req,res,next){
  jwt.verify(req.query.token, 'secretIsNothingLol', function (err, decoded) {
      if (err) {
          return res.status(401).json({
              title: 'Not Authenticated',
              error: err
          });
      }
      next();
  })
}
module.exports = middlewareObject;
