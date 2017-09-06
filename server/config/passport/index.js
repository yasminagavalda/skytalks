const path = require('path')
const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy
const jwtStrategy = require('./strategies/jwt')

const User = require(path.join(__dirname, '../../models/User'))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new LocalStrategy(User.authenticate()))
passport.use(jwtStrategy)

module.exports = passport
