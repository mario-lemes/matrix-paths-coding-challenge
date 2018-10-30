const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const vhost = require('vhost');
const Boom = require('boom');

// =====================================
// EXPRESS STATIC MIDDLEWARE ===========
// =====================================

/**
 * [middleware1(),...] Serve statics only in dev mode,
 * NGINX will do in production.
 * Checking if the requests are coming from localhost so NodeJS
 * can serve the static files for development and testing purposes
 */
module.exports = [
  vhost(/.*/, (req, res, next) => {
    const host = req.hostname;
    const parts = host.split('.');

    if (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      parts[parts.length - 1] === 'localhost'
    ) {
      next();
    } else {
      next(Boom.methodNotAllowed('Static files not available'));
    }
  }),
  vhost(
    /(localhost)/,
    express.static(path.join(__dirname, '/../public', 'app'), {
      setHeaders: (res, filePath, seat) => {
        const type = express.static.mime.lookup(filePath);
        res.setHeader('Content-Type', type);
      },
    }),
  ),
  vhost(
    /(localhost)/,
    favicon(path.join(__dirname, '/../public', 'app', 'favicon.ico')),
  ),
];
