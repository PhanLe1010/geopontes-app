var express = require("express");
var router = express.Router();
var Letter = require("../models/letter");
var Comment = require("../models/comment");
var middlewareObject = require("../middleware/middleware");

// API for getting letter-comments
router.get('/:letter_id/comment', function(req, res, next){
  Letter.findById(req.params.letter_id).populate("comments")
                .exec(function(err, letter){
                  if(err){
                    return res.status(500).json({
                      title: "Cannot load comments! An error occurred.",
                      error: err
                    });
                  }else{
                    res.status(201).json({
                      title: "successfully fetch comments ",
                      obj: letter.comments
                    })
                  }
                })
});


// API for posting a comment
router.post('/:letter_id/comment', function(req, res, next){

  Letter.findById(req.params.letter_id, function(err, letter){
    if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
    var comment = new Comment({
                      name: req.body.name,
                      email: req.body.email,
                      content: req.body.content,
                      letterId: letter._id
                    });
    comment.save(function(err, result){
      if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
      letter.comments.push(result);
      letter.save();
      res.status(201).json({
                message: 'Saved message',
                obj: result
            });
    });
  });
});

// API for deleting a comment
router.delete('/:letter_id/comment/:comment_id',middlewareObject.isLoggedIn, function(req, res, next){
  Letter.findById(req.params.letter_id, function(err, letter){
    if(err){
      return res.status(500).json({
                  title: 'An error occurred',
                  error: err
              });
    }else{
      Comment.findByIdAndRemove(req.params.comment_id, function(err, deletedComment){
        if(err){
          return res.status(500).json({
                      title: 'An error occurred',
                      error: err
                  });
        }else{
          res.status(200).json({
                    message: 'Deleted comment',
                    obj: deletedComment
                });
        }
      })
    }
});
})

module.exports = router;
