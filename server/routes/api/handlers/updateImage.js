const User = __require('/models/User')

function updateImage (req, res) {
  var { image } = req.params
  var { id } = req.user
  console.log(id, image)
  User.findByIdAndUpdate(id, { $set: { image } })
}

module.exports = updateImage
