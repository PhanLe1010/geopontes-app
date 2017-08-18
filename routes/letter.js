var express = require("express");
var router = express.Router();
var Letter = require("../models/letter");


// API for getting letter
router.get('/letter', function(req, res, next){
  Letter.find()
                .exec(function(err, letters){
                  if(err){
                    return res.status(500).json({
                      title: "Cannot get letters! An error occurred.",
                      error: err
                    });
                  }else{
                    res.status(201).json({
                      title: "successfully get letter",
                      obj: letters
                    })
                  }
                })
});

// API for posting a letter
router.post('/letter', function(req, res, next){
  var letter = new Letter({
    title: req.body.title,
    content: req.body.content,
    signature: req.body.signature
  });
  letter.save(function(err, result){
    if(err){
      return res.status(500).json({
        title: "Cannot save letter! An error occurred.",
        error: err
      });
    }else{
      res.status(201).json({
        title: "Saved letter successfully",
        obj: result
      });
    }
  })
})

// API for posting a letter
router.patch('/letter/:letter_id', function(req, res, next){
  const editedLetter = {
    title: req.body.title,
    content: req.body.content,
    signature: req.body.signature
  };
  Letter.findByIdAndUpdate(req.params.letter_id,  editedLetter, function(err, updatedLetter){
    if(err){
      return res.status(500).json({
                  title: 'An error occurred',
                  error: err
              });
    }else{
      res.status(200).json({
                message: 'Updated letter',
                obj: updatedLetter
            });
    }
});
})

router.delete('/letter/:letter_id', function(req, res, next){

  Letter.findByIdAndRemove(req.params.letter_id, function(err, deletedLetter){
    if(err){
      return res.status(500).json({
                  title: 'An error occurred',
                  error: err
              });
    }else{
      res.status(200).json({
                message: 'Deleted letter',
                obj: deletedLetter
            });
    }
});
})


module.exports = router;
