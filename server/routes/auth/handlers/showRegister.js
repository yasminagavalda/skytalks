function showRegister (req, res) {
  const err = req.query.err
  res.render('pages/register', { userexists: err })
}

module.exports = showRegister
