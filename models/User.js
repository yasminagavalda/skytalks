const mongoose = require('mongoose');
const collection = 'users'

var UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  country: String,
  email: String,
  password: String,
  about: String,
  languages: [{
    language: String, 
    level: String
  }],
}, { collection })

module.exports = mongoose.model('User', UserSchema);