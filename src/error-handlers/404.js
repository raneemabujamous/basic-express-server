function handle404error(req, res, next) {
  const errorObject = {
    status: 404,
    message:
      "The HTTP 404 Not Found client error response code indicates that the server can't find the requested resource",
  };
  res.status(404).json(errorObject);
}

module.exports = handle404error;
