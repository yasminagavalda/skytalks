const Talk = __require('/models/Talk')

function showHome (req, res) {
  const { user } = req
  Talk.find({ available: true })
    .limit(3)
    .populate('creator')
    .sort({date: -1})
    .then(talks => {
      res.render('pages/home', { talks, user })
    })
}

module.exports = showHome
