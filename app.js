const express = require('express')
const path = require('path')
const cookieSession = require('cookie-session')

const app = express()

const PORT = process.env.PORT || 3005

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

app.get('/', (req,res) => {
  res.render('pages/home')
})

app.get('/results', (req,res) => {
  res.render('pages/results')
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

app.get('/logout', (req,res) => {
  res.cookie('loggedIn', false)
  res.redirect('/')
})

app.post('/login', (req,res) => {
  res.cookie('loggedIn', true)
  res.redirect('/')
})

app.get('/register', (req,res) => {
  res.render('pages/register')
})

console.log(`Listening on port ${PORT}`)
app.listen(PORT)