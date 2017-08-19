var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var Comment = require('./comment')

var schema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required:true},
  signature: {type: String, required: true},
  date: {type: Date, default: Date.now},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})


module.exports =  mongoose.model('Letter', schema);
