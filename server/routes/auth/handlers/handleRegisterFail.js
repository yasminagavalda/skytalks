function handleRegisterFail (req, res) {
	res.redirect('/register?err=true')
}

module.exports = handleRegisterFail