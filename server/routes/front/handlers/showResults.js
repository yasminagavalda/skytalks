const Talk = __require('/models/Talk')

function showResults (req, res) {
	const { user } = req
  const { language } = req.body
  console.log(language)
  Talk.find({ language, available: true })
    .populate('creator')
    .then(talks => {
      res.render('pages/results', { talks, user, language })
    })
}

module.exports = showResults