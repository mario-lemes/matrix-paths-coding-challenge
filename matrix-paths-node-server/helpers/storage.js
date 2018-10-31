const fs = require('fs');
const path = require('path');
const multer = require('multer');

exports.storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, process.env.FILES_PATH);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});
