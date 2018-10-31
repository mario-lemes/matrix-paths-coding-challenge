const fs = require('fs');
const path = require('path');
const multer = require('multer');

exports.storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join('files'));
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});
