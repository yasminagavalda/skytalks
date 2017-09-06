function showLogout (req, res) {
  req.logout()
  res.redirect('/')
}

module.exports = showLogout
