function handle500eror(err, req, res, next) {
  const error = err.massage ? err.massage : err;
  const errorObj = {
    status: 500,
    message:
      " Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.",
  };
  res.status(500).json(errorObj);
}
module.exports = handle500eror;
