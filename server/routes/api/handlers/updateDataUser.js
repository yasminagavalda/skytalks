const User = __require('/models/User')

function updateDataUser (req, res) {
  var { _id, firstname, lastname, age, country, about, email, password } = req.body
  User.findByIdAndUpdate(_id, { $set: { firstname, lastname, age, country, about, email } })
      .then(() => res.redirect('/user#!/profile'))
}

module.exports = updateDataUser
