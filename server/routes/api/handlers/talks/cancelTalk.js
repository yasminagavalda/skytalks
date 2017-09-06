const Talk = __require('/models/Talk')

function cancelTalk (req, res) {
  var { id } = req.params
  Talk.findByIdAndRemove(id)
  	.then(() => res.send('Talk Removed'))
}

module.exports = cancelTalk