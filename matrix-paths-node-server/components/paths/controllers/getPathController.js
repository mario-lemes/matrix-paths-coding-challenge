const path = require('path');
const fs = require('fs');
const Boom = require('boom');
const request = require('request-promise-native');

let runPy = args => {
  try {
    return new Promise(function(resolve, reject) {
      const { spawn } = require('child_process');

      const pyprog = spawn(process.env.SCRIPT_TYPE, [
        path.join(process.env.SCRIPT_PATH, 'main.py'),
        ...args,
      ]);

      pyprog.stdout.on('data', function(data) {
        resolve(data);
      });

      pyprog.stderr.on('data', data => {
        reject(data);
      });
    });
  } catch (error) {
    reject(error);
  }
};

/**
 * getPathController(): Controller to get a specific path
 * from the matrix selected
 */

exports.getPathController = async (req, res, next) => {
  try {
    if (!req.query.file) {
      throw Boom.badRequest('File should be provided');
    }

    const filePath = path.join(process.env.FILES_PATH, req.query.file);

    if (!fs.existsSync(filePath)) {
      throw Boom.notFound(`File ${req.query.file} not found`);
    }

    req.connection.setTimeout(300000);

    let resPath = await runPy([filePath]);

    resPath = JSON.parse(resPath.toString());

    if (resPath.ok)
      return res.status(200).json({
        ok: true,
        result: resPath.result,
        executionTime: resPath.executionTime,
      });

    throw Boom.badImplementation(`Something went wrong: ${resPath.error}`);
  } catch (err) {
    return next(Boom.boomify(err));
  }
};
