const Boom = require('boom');

/**
 * createMatrixController(): Controller to upload or generate a matrix
 */
exports.createMatrixController = async (req, res, next) => {
  try {
    // Check if there is file attached
    let file = null;
    if (req.file) {
      file = {
        ...req.file,
      };
    }

    return res.status(200).json({ ok: true, file });
  } catch (err) {
    return next(Boom.boomify(err));
  }
};
