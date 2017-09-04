const express = require('express')
const path = require('path')

const app = express()

/* Environment Variables */
const PORT = process.env.PORT || 3005
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
const passport = require('./config/passport/')
app.use(passport.initialize())

/* Json Web Token */
var jwt = require('jsonwebtoken')

/* Static Path */
app.use(express.static(path.join(__dirname, '../client')))


/* bodyParser */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* navigation handling */

app.get('/results', (req, res) => {
    res.render('pages/results', { talks })
})

app.get('/', (req, res) => {
    Talk.find({ available: true })
        .limit(3)
        .populate('creator')
        .then(talks => {
            res.render('pages/home', { talks })
        })
})

app.get('/user', (req, res) => {
    res.render('pages/user')
})

app.get('/login', (req, res) => {
    const err = req.query.err
    res.render('pages/login', { wrongdata: err })
})

app.get('/login-fail', (req, res) => {
    res.redirect('/login?err=true')
})

app.get('/logout', (req, res) => {
    res.cookie('loggedIn', false)
    res.redirect('/')
})

app.get('/register', (req, res) => {
    res.render('pages/register', { userexists: false })
})

app.get('/register-user', (req, res) => {
    res.render('pages/register', { userexists: true })
})

/* forms handling */

app.post('/register', (req, res) => {
    const { email, password } = req.body
    const user = new User({ username: email })
    User.register(user, password, err => {
        if (err) {
            return res.redirect('/register-user')
        }
        res.redirect('/user#!/profile')
    })
})

app.post('/login', passport.authenticate('local', { failureRedirect: '/login-fail', session: false }),
    function(req, res) {
        res.redirect('/user');
    })

/* API handling */

app.get('/api/user/:id', (req, res) => {
    var { id } = req.params
    User.findById(id, (err, user) => {
        res.json(user)
    })
})

app.put('/api/user/:id/newlanguage/:language/:level', (req, res) => {
    var { id, language, level } = req.params
    User.findByIdAndUpdate(id, { $push: { languages: { language: language, level: level } } }, { safe: true, upsert: true }, function(err, data) {
        return res.send(data);
    })
})

app.put('/api/user/:id/remove/:language', (req, res) => {
    var { id, language } = req.params
    console.log(id, language)
    User.findByIdAndUpdate(id, { $pull: { languages: { language: language } } })
        .then((err, data) => {
            return res.send(data)
        })
})

app.post('/api/user/update', (req, res) => {
    var { _id, firstname, lastname, age, country, about, email, password } = req.body
    User.findByIdAndUpdate(_id, { $set: { firstname: firstname, lastname: lastname, age: age, country: country, about: about, email: email, password: password } }, function(err, tank) {
        res.redirect('/user#!/profile')
    })
})

app.get('/api/talks-confirmed/:id', (req, res) => {
    var { id } = req.params
    Talk.find({ creator: id, joined: id, available: false }, (err, user) => {
        res.json(user)
    })
})

app.get('/api/talks-waiting-partner/:id', (req, res) => {
    var { id } = req.params
    Talk.find({ creator: id, available: true }, (err, user) => {
        res.json(user)
    })
})

app.get('/api/talks-waiting-response/:id', (req, res) => {
    var { id } = req.params
    Talk.find({ joiners: id, available: true })
        .populate('creator')
        .then(talks => {
            res.json(talks)
        })

})

app.post('/api/newtalk', (req, res) => {
    var { id, newlanguage, date, place } = req.body
    const language = newlanguage.split(':')[0]
    const level = newlanguage.split(':')[1]
    Talk.create({ date, place, language, level, creator: id, available: true })
        .then((err, data) => {
            return res.redirect('/user#!')
        })
})

app.get('/talk/:id', (req, res) => {
    var { id } = req.params
    Talk.findById(id)
        .populate('creator')
        .then(talk => {
            console.log(talk)
            res.render('pages/details', { talk })
        })
})

app.put('/api/join/:id', (req, res) => {
    var { id } = req.params
    var userId = "59a7ff51b3041c41bc090810"
    console.log(userId)
    Talk.findByIdAndUpdate(id, { $push: { joiners: userId } }, { safe: true, upsert: true }, function(err, data) {
        return res.send(data);
    })
})

console.log(`Listening on port ${PORT}`)
app.listen(PORT)