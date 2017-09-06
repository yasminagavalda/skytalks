const express = require('express')
const path = require('path')
const router = express.Router()

const getDetailsUser = require('./handlers/getDetailsUser')
const addLanguage = require('./handlers/addLanguage')
const removeLanguage = require('./handlers/removeLanguage')
const updateDataUser = require('./handlers/updateDataUser')
const updateImage = require('./handlers/updateImage')

const getConfirmedTalks = require('./handlers/talks/getConfirmedTalks')
const getWaitingPartnerTalks = require('./handlers/talks/getWaitingPartnerTalks.js')
const getWaitingResponseTalks = require('./handlers/talks/getWaitingResponseTalks')
const savePartner = require('./handlers/talks/savePartner')
const cancelTalk = require('./handlers/talks/cancelTalk')
const unjoinTalk = require('./handlers/talks/unjoinTalk')

router.get('/user/:id', getDetailsUser)
router.put('/user/:id/newlanguage/:language/:level', addLanguage)
router.put('/user/:id/remove/:language', removeLanguage)
router.post('/user/update', updateDataUser)
router.put('/user/:id/update/image', updateImage)

router.get('/talks-confirmed/:id', getConfirmedTalks)
router.get('/talks-waiting-partner/:id', getWaitingPartnerTalks)
router.get('/talks-waiting-response/:id', getWaitingResponseTalks)
router.put('/talk/:talkid/partner/:partnerid', savePartner)
router.delete('/cancel/talk/:id', cancelTalk)
router.put('/unjoin/:userid/talk/:talkid', unjoinTalk)

module.exports = router
