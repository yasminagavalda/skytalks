const User = __require('/models/User')

function addLanguage (req, res) {
  var { id, language, level } = req.params
  User.findByIdAndUpdate(id, { $push: { languages: { language: language, level: level } } }, { safe: true, upsert: true }, function (_, data) {
    return res.send(data)
  })
}

module.exports = addLanguage
