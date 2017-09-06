const Talk = __require('/models/Talk')

function unjoinTalk (req, res) {
  var { talkid, userid } = req.params
  Talk.findByIdAndUpdate(talkid, { $pull: { joiners: userid}})
  	.then(() => res.send('Talk Unjoined'))
}

module.exports = unjoinTalk