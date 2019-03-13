var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema  = mongoose.Schema;

var schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required:true},
  fullName: {type: String, required:true}
})
schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);
