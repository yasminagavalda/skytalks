function showUser (req, res) {
  const { user } = req
  res.render('pages/user', { user })
}

module.exports = showUser
