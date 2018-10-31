const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

// HELPERS
const logger = require('./helpers/logger');
// MIDDLEWARES
const serveStatics = require('./middlewares/serveStatics');
const errorHandler = require('./middlewares/errorHandler');

// ROUTES
const apiRoutes = require('./routes/apiRoutes');

/* INSTANCE APP */
const app = express();

/* HELMET INITIALIZE */
app.use(helmet());

/* LOGGER */
app.use(logger);

/* PARSE HTTP BODY MESSAGES */
// For parsing application/json
app.use(bodyParser.json());
// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/* ROUTES */
app.use(function(req, res, next) {
  req.socket.setKeepAlive(false);
  next();
});

app.use('/api', apiRoutes);

/* STATIC FILES (ONLY FOR LOCALHOST) */
app.use(serveStatics);

/* ERROR HANDLER */
app.use(errorHandler);

module.exports = app;
