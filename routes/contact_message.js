var express = require('express');
var router = express.Router();
var ContactMessage = require("../models/contactMessage");
var middlewareObject = require("../middleware/middleware");


// API for getting contact messages
router.get('/contact_message',middlewareObject.isLoggedIn, function(req, res, next){
  ContactMessage.find()
                .exec(function(err, messages){
                  if(err){
                    return res.status(500).json({
                      title: "Cannot get messages! An error occurred.",
                      error: err
                    });
                  }else{
                    res.status(201).json({
                      title: "successfully get messages",
                      obj: messages
                    })
                  }
                })
})

// API for posting contact message
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
