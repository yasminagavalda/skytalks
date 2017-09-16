const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'users'

var UserSchema = new Schema({
  firstname: String,
  lastname: String,
  country: String,
  age: Number,
  image: String,
  email: String,
  about: String,
  languages: [{
    language: String,
    level: String
  }],
  alerts: {confirmed: Number, wpartner: Number, wanswer: Number}
}, { collection })

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema)
