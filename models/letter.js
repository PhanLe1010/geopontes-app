var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var schema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required:true},
  signature: {type: String, required: true},
  date: {type: Date, default: Date.now}
})

module.exports =  mongoose.model('Letter', schema);
