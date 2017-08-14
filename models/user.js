var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongooseUniqueValidator');
var Schema  = mongoose.Schema;

var schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required:true},
  fullName: {type: String, default: Date.now}
})
shema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);
