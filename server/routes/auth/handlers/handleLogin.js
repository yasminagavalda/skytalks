/* Json Web Token */
var jwt = require('jsonwebtoken')

function handleLogin (req, res) {
  const SECRET = process.env.SECRET || 'secret'
  const { _id: id, username } = req.user
  const token = jwt.sign({ id, username }, SECRET)
  res.redirect('/user?token=' + token)
}

module.exports = handleLogin
