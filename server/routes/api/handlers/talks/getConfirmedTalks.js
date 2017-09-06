const Talk = __require('/models/Talk')

function getConfirmedTalks (req, res) {
  var { id } = req.params
  Talk.find({ creator: id, joined: id, available: false }, (_, user) => {
    res.json(user)
  })
}

module.exports = getConfirmedTalks
