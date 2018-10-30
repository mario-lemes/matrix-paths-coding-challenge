// =====================================
// ERROR HANDLER MIDDLEWARE ============
// =====================================

/**
 * () Middleware to handle any error thrown
 * in any express execution flow
 */
module.exports = (err, req, res, next) => {
  let e;
  if (!err.output) {
    e = err;
  } else {
    e = err.output.payload;
  }

  const { message, error, statusCode } = e;

  if (statusCode === 500) {
    return next(err);
  }

  res.status(statusCode || 500);

  if (err.data) {
    return res.json({
      ok: false,
      error,
      message,
      details: err.data,
    });
  }

  return res.json({
    ok: false,
    error,
    message,
  });
};
