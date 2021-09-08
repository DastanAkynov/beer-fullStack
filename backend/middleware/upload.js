const path = require('path');
const multer = require('multer')
const {nanoid} = require('nanoid');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public')
  },
  filename(req, file, cb) {
    cb(null, nanoid() + path.extname(file.originalname))
  }
})


module.exports = multer({storage});