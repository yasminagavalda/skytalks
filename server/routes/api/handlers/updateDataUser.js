const User = __require('/models/User')

function updateDataUser (req, res) {
  var { id, firstname, lastname, age, country, about, email, password } = req.body
  User.findByIdAndUpdate(id, { $set: { firstname, lastname, age, country, about, email } })
      .then(() => {
  		res.send('profile uploaded')
  	  })
}

module.exports = updateDataUser
