var express = require('express');
var router = express.Router();
var ContactMessage = require("../models/contactMessage");

router.post('/contact_message', function(req, res, next){
  var contactMessage = new ContactMessage({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  });
  contactMessage.save(function(err, result){
    if(err){
      return res.status(500).json({
        title: "Cannot save message! An error occurred.",
        error: err
      });
    }else{
      res.status(201).json({
        title: "Saved message successfully",
        obj: result
      });
    }
  })
})


module.exports = router;
