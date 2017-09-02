const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const collection = 'users'

var UserSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  country: String,
  image: String,
  email: String,
  password: String,
  about: String,
  languages: [{
    language: String,
    level: String
  }]
}, { collection })

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema)
