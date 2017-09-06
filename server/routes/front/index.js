const express = require('express')
const router = express.Router()

const showHome = require('./handlers/showHome')
const showUser = require('./handlers/showUser')
const handleJoin = require('./handlers/handleJoin')
const showResults = require('./handlers/showResults')

router.get('/', showHome)
router.get('/user', showUser)
router.get('/join/:id', handleJoin)
router.post('/results', showResults)

module.exports = router
