const User = __require('/models/User')

function updateImage (req, res) {
  var { image } = req.body
  const { id } = req.params
  User.findByIdAndUpdate( id, { $set: { image } })
  	.then('ok')
}

module.exports = updateImage