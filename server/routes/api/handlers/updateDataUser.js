const User = __require('/models/User')

function updateDataUser (req, res) {
  var { id, firstname, lastname, age, country, about, email} = req.body
  User.findByIdAndUpdate(id, { $set: { firstname, lastname, age: age || 0, country, about, email } })
      .then((_, data) => {
          return res.send(data)
        })
}

module.exports = updateDataUser
