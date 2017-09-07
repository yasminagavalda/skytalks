global.__require = require('./helpers/__requireFrom')(__dirname)

const express = require('express')
const path = require('path')

const app = express()

/* Environment Variables */
const PORT = process.env.PORT || 3003
const urlDB = process.env.urlDB || 'mongodb://localhost:27017/skytalks'

/* Mongoose */
const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect(urlDB, { useMongoClient: true })

/* Mongoose models */
const User = require(path.join(__dirname, '/models/User'))
const Talk = require(path.join(__dirname, '/models/Talk'))

/* App settings */
app.set('views', path.resolve('server/views'))
app.set('view engine', 'pug')

/* Passport Load */
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('./config/passport/')

app.use(cookieParser())
app.use(session({ secret: 'supersecretworddonottelltoanyone' }))

app.use(passport.initialize())
app.use(passport.session())

/* Static Path */
app.use(express.static(path.join(__dirname, '../client')))

/* bodyParser */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* Routes */
app.use(require('./routes/auth/'))
app.use(require('./routes/front/'))
app.use('/api', require('./routes/api/'))
app.use(require('./routes/cloudinary/'))

console.log(`Listening on port ${PORT}`)
app.listen(PORT)
