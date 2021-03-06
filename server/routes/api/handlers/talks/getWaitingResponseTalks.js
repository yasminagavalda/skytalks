const Talk = __require('/models/Talk')

function getWaitingResponseTalks (req, res) {
  var { id } = req.params
  Talk.find({ joiners: id, available: true })
        .populate('creator')
        .sort({date: 1})
        .then(talks => {
          res.json(talks)
        })
}

module.exports = getWaitingResponseTalks
