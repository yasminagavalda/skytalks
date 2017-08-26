const express = require('express')
const path = require('path')
const cookieSession = require('cookie-session')

// mongoose.Promise = Promise

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
// const urlDB = process.env.urlDB || 'mongodb://localhost:27017/test'

// mongoose.connect(urlDB)

app.set('view engine', 'pug')

app.use(express.static( path.join(__dirname,'public')))

app.use(cookieSession({
  name: 'myCookieSession',
  keys: ['sdg156da8gearg15df56', '5s6sfdf56g6fv2s6aav1']
}))

app.use((req, res, next) => {
  //req.session.loggedIn = req.session.loggedIn || false
  next()
})

app.get('/user/:id', (req,res) => {
  res.json(users)
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

app.get('/user#!/login', (req,res) => {
    res.redirect('/login')
})

app.get('/login', (req,res) => {
  res.render('pages/login')
})

app.post('/login', (req,res) => {
  res.cookie('loggedIn', true)
  res.redirect('/')
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