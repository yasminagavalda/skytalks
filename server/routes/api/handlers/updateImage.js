const User = __require('/models/User')

function updateImage (req, res) {
  console.log('hol')
  var { image } = req.body
  const { id } = req.params
  console.log(image, id)
  User.findByIdAndUpdate( id, { $set: { image } })
  	.then('ok')
}

module.exports = updateImage