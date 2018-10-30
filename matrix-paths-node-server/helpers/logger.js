const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');

// =====================================
// SYSTEM LOGGER MIDDLEWARE ============
// =====================================

// Setup the logger
if (process.env.NODE_ENV === 'production') {
  const logDirectory = path.join(__dirname, '/../logs');

  // Ensure log directory exists
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

  // Create a rotating write stream
  const accessLogStream = rfs('access.log', {
    interval: '1d', // Rotate daily
    maxFiles: 7, // Rotate every week
    path: logDirectory,
  });

  module.exports = morgan('combined', { stream: accessLogStream });
} else {
  morgan.token(
    'body',
    (req, res) => JSON.stringify(req.body, null, '  ') || '',
  );
  module.exports = morgan(
    ':method :url :status :response-time ms | :remote-addr | :date[clf] -> :res[content-length] bytes | body -> :body',
    {
      skip(req, res) {
        return process.env.DEBUG === 'false';
      },
    },
  );
}
