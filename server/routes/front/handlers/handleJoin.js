const Talk = __require('/models/Talk')

function handleJoin (req, res) {
  const { id } = req.params
  const { user: { _id } } = req
  Talk.findByIdAndUpdate(id, { $push: { joiners: _id } }, { safe: true, upsert: true })
    .then(data => { res.redirect('/user') })
}

module.exports = handleJoin
