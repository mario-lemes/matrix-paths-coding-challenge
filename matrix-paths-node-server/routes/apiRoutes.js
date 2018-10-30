const express = require('express');

const apiRoutes = express.Router();

const matrixesRoutes = require('../components/matrixes/matrixesRoutes');
const pathsRoutes = require('../components/paths/pathsRoutes');

/**
 * API ROUTES
 */
apiRoutes.use('/v1/matrixes', matrixesRoutes);
apiRoutes.use('/v1/paths', pathsRoutes);

apiRoutes.use((req, res, next) => {
  next(
    Boom.notFound(
      'The endpoint ' +
        req.url +
        ' does not match with any of the existing API',
    ),
  );
});

module.exports = apiRoutes;
