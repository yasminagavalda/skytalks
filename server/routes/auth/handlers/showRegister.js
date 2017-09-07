function showRegister (req, res) {
  const err = req.query.err
  const success = req.query.success
  res.render('pages/register', { userexists: err, registerok: success })
}

module.exports = showRegister
