const mongoose = require('mongoose');
const collection = 'users'

var UserSchema = new mongoose.Schema({
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
  }],
  confirmed: [{ type: mongoose.Schema.ObjectId, ref: "Talk"}],
  created: [{ type: mongoose.Schema.ObjectId, ref: "Talk" }],
  joined: [{ type: mongoose.Schema.ObjectId, ref: "Talk" }]
}, { collection })

module.exports = mongoose.model('User', UserSchema);


// db.users.insert({
//   firstname: "Paula",
//   lastname: "Madeiros",
//   age: 38,
//   country: "Portugal",
//   image: String,
//   email: "paumadeiros@hotmail.com",
//   password: "123456",
//   about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt perspiciatis laboriosam explicabo obcaecati sunt voluptas natus repellendus vitae at, aspernatur sint nisi reprehenderit dolorum sapiente delectus error distinctio rem aliquam!",
//   languages: [{
//     language: "Portuguese", 
//     level: "Native"
//   },
//   {
//     language: "English", 
//     level: "Advanced"
//   },
//   {
//     language: "German", 
//     level: "Intermediate"
//   }]
// })
