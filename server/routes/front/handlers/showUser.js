function showUser (req, res) {
  const { user } = req
  var alerttalks = 3
  res.render('pages/user', { user, alerttalks})
}

module.exports = showUser
