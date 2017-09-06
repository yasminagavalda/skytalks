const express = require('express')
const router = express.Router()

const getDetailsUser = require('./handlers/getDetailsUser')
const addLanguage = require('./handlers/addLanguage')
const removeLanguage = require('./handlers/removeLanguage')
const updateDataUser = require('./handlers/updateDataUser')
const updateImage = require('./handlers/updateImage')

const getConfirmedTalks = require('./handlers/talks/getConfirmedTalks')
const getWaitingPartnerTalks = require('./handlers/talks/getWaitingPartnerTalks.js')
const getWaitingResponseTalks = require('./handlers/talks/getWaitingResponseTalks')

router.get('/user/:id', getDetailsUser)
router.put('/user/:id/newlanguage/:language/:level', addLanguage)
router.put('/user/:id/remove/:language', removeLanguage)
router.post('/user/update', updateDataUser)
router.put('/image/update/:image', updateImage)

router.get('/talks-confirmed/:id', getConfirmedTalks)
router.get('/talks-waiting-partner/:id', getWaitingPartnerTalks)
router.get('/talks-waiting-response/:id', getWaitingResponseTalks)

module.exports = router
