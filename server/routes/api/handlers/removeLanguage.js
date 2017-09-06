const User = __require('/models/User')

function removeLanguage (req, res) {
  var { id, language } = req.params
  User.findByIdAndUpdate(id, { $pull: { languages: { language: language } } })
        .then((_, data) => {
          return res.send(data)
        })
}

module.exports = removeLanguage
