function showLogout (req, res) {
  req.logout()
  res.redirect('/login')
}

module.exports = showLogout
