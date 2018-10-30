const express = require('express');
const Boom = require('boom');

const { getPath } = require('./controllers');

const pathsRoutes = express.Router();

// /paths
pathsRoutes
  .route('/')
  .get(getPath)
  .all((req, res, next) => {
    next(
      Boom.methodNotAllowed('Operation not supported on /paths', null, ['GET']),
    );
  });
module.exports = pathsRoutes;
