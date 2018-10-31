const Boom = require('boom');

/**
 * createMatrixController(): Controller to upload or generate a matrix
 */
exports.createMatrixController = async (req, res, next) => {
  try {
    // Check if there is file attached
    if (!req.file) {
      throw Boom.badRequest('File should be provided');
    }

    const file = {
      ...req.file,
    };

    return res.status(200).json({ ok: true, file });
  } catch (err) {
    return next(Boom.boomify(err));
  }
};
