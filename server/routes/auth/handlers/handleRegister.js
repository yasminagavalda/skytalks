const User = __require('/models/User')

function handleRegister (req, res) {
  const { email, password } = req.body
  const user = new User({ username: email, image:'http://res.cloudinary.com/djtxc60sj/image/upload/v1504710538/skytalks/default-user-image.png' })
  User.register(user, password, err => {
    if (err) {
      return res.redirect('/register-fail')
    } else {
      res.redirect('/login')
    }
  })
}

module.exports = handleRegister
