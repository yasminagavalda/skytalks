const Talk = __require('/models/Talk')

function savePartner (req, res) {
  var { talkid, partnerid } = req.params
  Talk.update({_id:talkid}, { $set: { joined: partnerid, available: false }})
  	.then(() => res.send('Partner saved'))
}

module.exports = savePartner
