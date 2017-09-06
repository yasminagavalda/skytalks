const User = __require('/models/User')

function handleRegister (req, res) {
  const { email, password } = req.body
  const user = new User({ username: email })
  User.register(user, password, err => {
    if (err) {
      return res.redirect('/register-fail')
    } else {
      res.redirect('/login')
    }
  })
}

module.exports = handleRegister
