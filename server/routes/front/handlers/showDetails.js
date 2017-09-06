const Talk = __require('/models/Talk')

function showDetails (req, res) {
  const { user } = req
  var { id } = req.params
  Talk.findById(id)
        .populate('creator')
        .then(talk => {
          console.log(talk)
          res.render('pages/details', { talk, user })
        })
}

module.exports = showDetails