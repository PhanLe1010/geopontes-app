var mongoose = require('mongoose');
var Schema  = mongoose.Schema;
var schema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required:true},
  content: {type: String, required: true},
  date: {type: Date, default: Date.now},
})

module.exports =  mongoose.model('Comment', schema);
