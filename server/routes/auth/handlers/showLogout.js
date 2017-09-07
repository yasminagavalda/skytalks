function showLogout (req, res) {
	req.session.destroy()
  req.logout()
  res.redirect('/login')
}

module.exports = showLogout
