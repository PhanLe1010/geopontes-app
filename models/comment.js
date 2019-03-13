var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var Letter = require('./letter');

var schema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required:true},
  content: {type: String, required: true},
  letterId: {type: String, required: true},
  date: {type: Date, default: Date.now},
})

schema.post('remove', function(comment){
  Letter.findById(comment.letterId, function(err, letter){
    letter.comments.pull(comment);
    letter.save();
  });
});

module.exports =  mongoose.model('Comment', schema);
