const express = require('express')
const router = express.Router()

const passport = __require('config/passport/')

const showLogin = require('./handlers/showLogin')
const handleLogin = require('./handlers/handleLogin')
const showRegister = require('./handlers/showRegister')
const handleRegister = require('./handlers/handleRegister')

router.get('/login', showLogin)
router.post('/login', passport.authenticate('local', { session: true }), handleLogin)
router.get('/register', showRegister)
router.post('/register', handleRegister)

module.exports = router
