function handleLoginFail (req, res) {
     res.redirect('/login?err=true')
}

module.exports = handleLoginFail