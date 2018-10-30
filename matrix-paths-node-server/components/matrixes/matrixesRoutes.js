const express = require('express');
const Boom = require('boom');
const multer = require('multer');

const { storage } = require('../../helpers/storage');
const { createMatrix } = require('./controllers');

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10097152,
  },
});

const matrixesRoutes = express.Router();

// /matrixes

matrixesRoutes
  .route('/')
  .post(upload.single('file'), createMatrix)
  .all((req, res, next) => {
    next(
      Boom.methodNotAllowed('Operation not supported on /matrixes', null, [
        'POST',
      ]),
    );
  });
module.exports = matrixesRoutes;
