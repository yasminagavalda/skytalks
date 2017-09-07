const Talk = __require('/models/Talk')

function getConfirmedTalks (req, res) {
  var { id } = req.params
  Talk.find({ creator: id, available: false })
  	.populate('creator')
  	.then((user) => {
	    res.json(user)
	  })
}

module.exports = getConfirmedTalks
