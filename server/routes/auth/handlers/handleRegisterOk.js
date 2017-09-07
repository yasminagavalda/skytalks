function handleRegisterOk (req, res) {
	res.redirect('/register?success=true')
}

module.exports = handleRegisterOk