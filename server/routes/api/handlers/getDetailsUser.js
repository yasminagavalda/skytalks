const User = __require('/models/User')

function getDetailsUser (req, res) {
  var { id } = req.params
  User.findById(id, (_, user) => {
    console.log(user)
    res.json(user)
  })
}

module.exports = getDetailsUser
