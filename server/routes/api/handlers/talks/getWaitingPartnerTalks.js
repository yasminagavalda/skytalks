const Talk = __require('/models/Talk')

function getWaitingPartnerTalks (req, res) {
  var { id } = req.params
  Talk.find({ creator: id, available: true })
  	.populate('joiners') 
  	.then( user => res.json(user))
}

module.exports = getWaitingPartnerTalks
