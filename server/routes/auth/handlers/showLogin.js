function showLogin (req, res) {
  const err = req.query.err
  res.render('pages/login', { wrongdata: err })
}

module.exports = showLogin
