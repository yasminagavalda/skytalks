const Talk = __require('/models/Talk')

function handleJoin (req, res) {
  const { id } = req.params
  const { user: { _id } } = req
  Talk.findById(id)
  	.populate('creator')
  	.update({ $push: { joiners: _id } }, { safe: true, upsert: true }, {$inc :{ "creator.alerts.wanswer" : 1}})
    .then(data => { res.redirect('/user#!/my-talks') })
}

module.exports = handleJoin

