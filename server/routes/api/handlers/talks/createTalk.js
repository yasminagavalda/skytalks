const Talk = __require('/models/Talk')

function createTalk (req, res) {
  var { id, newlanguage, date, place } = req.body
  const language = newlanguage.split(': ')[0]
  const level = newlanguage.split(':')[1]
  User.update({_id: id}, {$inc :{ "alerts.wpartner" : 1}})
  		.then(Talk.create({ date, place, language, level, creator: id, available: true })
	        .then(() => {
	          return res.send('Talk created')
	        }))
}

module.exports = createTalk


  