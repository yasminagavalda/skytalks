const express = require('express')
const router = express.Router()

const showHome = require('./handlers/showHome')
const showUser = require('./handlers/showUser')
const handleJoin = require('./handlers/handleJoin')
const showResults = require('./handlers/showResults')
const showDetails = require('./handlers/showDetails')

router.get('/', showHome)
router.get('/user', showUser)
router.get('/join/:id', handleJoin)
router.post('/results', showResults)
router.get('/talk/:id', showDetails)


module.exports = router
