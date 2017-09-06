const cloudinary  = require('cloudinary');
const del = require('del')
const path = require('path')

const uploadFolderPath = path.join(__dirname, '../upload' )

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || 'djtxc60sj',
  api_key: process.env.API_KEY || '525747164695518',
  api_secret: process.env.API_SECRET || '7vis6LUIX5b8preIxuupNduqSZE'
});

function uploadCloudinary(req, res, next) {
  if(req.file) {
    cloudinary.uploader.upload(req.file.path, ({ url }) => {
      if (url) {
        req.imageLink = url
        // delete files inside folder but not the folder itself
        del.sync([`${uploadFolderPath}/**`, `!${uploadFolderPath}`]);
        next();
      }
      else {
        res.status(404).send("Oh uh, something went wrong");
      }
    })
  } else {
    next();
  }
}

module.exports = uploadCloudinary