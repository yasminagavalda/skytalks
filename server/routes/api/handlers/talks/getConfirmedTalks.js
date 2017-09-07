const Talk = __require('/models/Talk')

function getConfirmedTalks (req, res) {
  var { id } = req.params
  Talk.find({ creator: id, available: false })
  	.populate('creator')
  	.populate('joined')
  	.sort({date: 1})
  	.then((user) => {
	    res.json(user)
	  })
}

module.exports = getConfirmedTalks
