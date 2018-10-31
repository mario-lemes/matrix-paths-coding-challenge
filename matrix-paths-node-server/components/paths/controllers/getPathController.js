const path = require('path');
const fs = require('fs');
const Boom = require('boom');
const request = require('request-promise-native');

/**
 * getPathController(): Controller to get a specific path
 * from the matrix selected
 */
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

exports.getPathController = async (req, res, next) => {
  try {
    if (!req.query.file) {
      await timeout(100000);
      return res.status(200).json({ ok: true });
    }

    if (!req.query.file) {
      throw Boom.badRequest('File should be provided');
    }

    const filePath = path.join(process.env.FILES_PATH, req.query.file);

    if (!fs.existsSync(filePath)) {
      throw Boom.notFound(`File ${req.query.file} not found`);
    }

    req.socket.setKeepAlive(false);

    let resPath = null;
    switch (req.query.typePath) {
      case 'longest-descendent':
      default:
        resPath = await request({
          method: 'POST',
          uri: 'http://127.0.0.1:5000/longest-path',
          formData: {
            file: filePath,
          },
          timeout: 120 * 1000, //120 secs
        });
        break;
    }

    resPath = JSON.parse(resPath);
    if (resPath.ok)
      return res.status(200).json({ ok: true, result: resPath.result });

    throw Boom.badImplementation(`Something went wrong: ${resPath.error}`);
  } catch (err) {
    return next(Boom.boomify(err));
  }
};
