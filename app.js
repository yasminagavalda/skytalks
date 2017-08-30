const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

const app = express()

var users = {
  "id": "2548dd", 
  "username": "ygava", 
  "firstname": "Pepe", 
  "lastname": "Gavaldà", 
  "age": "26", 
  "country": "Spain", 
  "email": "y.gava@gmail.com", 
  "languages": [{
    "language": "English", 
    "level": "Native"
  }, 
  {
    "language": "Spanish", 
    "level": "Medium"
  }, 
  {
    "language": "Russian", 
    "level": "Advanced"
  }], 
  "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

var talks1 = [{
  _id: "2548dd",
  language: "English",
  level: "Advanced",
  place: "Le Journal, Carrer de Francisco Giner 36, Barcelona",
  date: "Tuesday August 20",
  creator: "Yasmina",
  joiners: ["Javier", "Paul", "Maria"],
  joined: [],
  available: true
}, 
{
  _id: "2548dd",
  language: "French",
  level: "Medium",
  place: "Skylab, Roc Boronat 35, Barcelona",
  date: "Wednesday August 22",
  creator: "Yasmina",
  joiners: ["John", "Mery"],
  joined: [],
  available: true
},
{
  _id: "2548dd",
  language: "Arabian",
  level: "Native",
  place: "Moog, Arc del Teatre 3, Barcelona",
  date: "Friday August 25",
  creator: "Yasmina",
  joiners: [],
  joined: [],
  available: true
}]

var talks = [{
  id: "2548dd",
  firstname_with: "Yasmina",
  language: "English",
  date: "Tuesday August 20",
  place: "Le Journal, Carrer de Francisco Giner 36, Barcelona"
}, 
{
  id: "2548dd",
  firstname_with: "Maria",
  language: "Spanish",
  date: "Monday August 25",
  place: "Le Journal, Carrer de Francisco Giner 36, Barcelona"
},
{
  id: "2548dd",
  firstname_with: "Paul",
  language: "French",
  date: "Wednesday August 26",
  place: "Le Journal, Carrer de Francisco Giner 36, Barcelona"
}]

const PORT = process.env.PORT || 3005
const urlDB = process.env.urlDB || 'mongodb://localhost:27017/skytalks'

mongoose.Promise = Promise
mongoose.connect(urlDB, {useMongoClient: true})
console.log(`db connected to ${urlDB}`)

const User = require('./models/User')
const Talk = require('./models/Talk')

app.set('view engine', 'pug')

app.use(express.static( path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/register', (req, res) => {
  var {firstname, email, password} = req.body
  User.create({firstname, email, password}, (err, user) => {
    res.redirect('/login')
  })
})

app.post('/api/login', (req, res) => {
  var {email, password} = req.body
  User.find({email})
    .then((user) => {
      const id = user[0]._id
      res.cookie('loggedIn', true).cookie('id', id).redirect('/user')
    })
})

app.get('/api/user/:id', (req, res) => {
  var {id} = req.params
  User.findById(id, (err, user) => {
    res.json(user)
  })
})

app.put('/api/user/:id/newlanguage/:language/:level', (req, res) => {
  var {id, language, level} = req.params
  User.findByIdAndUpdate(id, {$push: { languages: {language: language, level: level}}}, { safe:true, upsert: true }, function (err, data) {
      return res.send(data);
  })
})

app.put('/api/user/:id/remove/:language', (req, res) => {
  var {id, language} = req.params
  console.log(id, language)
  User.findByIdAndUpdate(id, { $pull: { languages: {language: language} } })
    .then((err, data)=> {
      return res.send(data)
    })
})

app.post('/api/user/update', (req, res) => {
  var { _id, firstname, lastname, age, country, about, email, password} = req.body
  console.log( _id, firstname, lastname, age, country, about, email, password )
  User.findByIdAndUpdate(_id, { $set: { firstname:firstname, lastname:lastname, age:age, country:country, about:about, email:email, password:password } }, function (err, tank) {
    res.redirect('/user#!/profile')
  })
})



app.get('/talk/:id', (req,res) => {
  res.json(talks)
})

app.get('/results', (req,res) => {
  res.render('pages/results', {talks})
})

app.get('/', (req,res) => {
  res.render('pages/home')
})

app.get('/details', (req,res) => {
  res.render('pages/details')
})

app.get('/user', (req,res) => {
    res.render('pages/user')
})

app.get('/login', (req,res) => {
  res.render('pages/login')
})

app.post('/login', (req,res) => {
  res.cookie('loggedIn', true)
  res.redirect('user')
})

app.get('/logout', (req,res) => {
  res.cookie('loggedIn', false)
  res.redirect('/')
})

app.get('/register', (req,res) => {
  res.render('pages/register')
})


console.log(`Listening on port ${PORT}`)
app.listen(PORT)