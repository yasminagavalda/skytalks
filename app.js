const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'pug')

const PORT = 3005

app.use(express.static( path.join(__dirname,'public')))

app.get('/', (req,res) => {
  res.render('pages/home')
})

app.get('/results', (req,res) => {
  res.render('pages/results')
})

app.get('/details', (req,res) => {
  res.render('pages/details')
})

app.get('/profile', (req,res) => {
  res.render('pages/profile')
})

app.get('/login', (req,res) => {
  res.render('pages/login')
})

app.get('/register', (req,res) => {
  res.render('pages/register')
})

console.log(`Listening on port ${PORT}`)
app.listen(PORT)