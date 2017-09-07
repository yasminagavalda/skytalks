const express = require('express')
const router = express.Router()

const passport = __require('config/passport/')

const showLogin = require('./handlers/showLogin')
const handleLogin = require('./handlers/handleLogin')
const handleLoginFail = require('./handlers/handleLoginFail')
const showRegister = require('./handlers/showRegister')
const handleRegister = require('./handlers/handleRegister')
const handleRegisterFail = require('./handlers/handleRegisterFail')
const handleRegisterOk = require('./handlers/handleRegisterOk')
const showLogout = require('./handlers/showLogout')

router.get('/login', showLogin)
router.get('/login-fail', handleLoginFail)
router.post('/login', passport.authenticate('local', { failureRedirect: '/login-fail', session: true }), handleLogin)
router.get('/register', showRegister)
router.post('/register', handleRegister)
router.get('/register-fail', handleRegisterFail)
router.get('/register-ok', handleRegisterOk)
router.get('/logout', showLogout)

module.exports = router
