const express = require('express')
const multer = require('multer')
const path = require('path')
const router = express.Router()

const uploadFolderPath = path.join( __dirname, 'upload' )

const upload = multer({
  dest: uploadFolderPath
})


const uploadCloudinary = require('./handlers/uploadCloudinary')

router.post('/upload', upload.single('file'), uploadCloudinary, (req, res) => {
  const { imageLink } = req
  res.status(200).json( { imageLink } );
})

module.exports = router
