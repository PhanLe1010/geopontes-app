var express = require("express");
var router = express.Router();

router.get('/get_letter', function(req, res, next){
  res.send('you reach the get letter route')
  next();
})

module.exports = router;
