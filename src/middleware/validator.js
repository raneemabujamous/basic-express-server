function vaildName(req, res, next) {
  const name = req.query.name;
  if (typeof name === "string") {
    next();
  } else {
    next("this is not valid name");
  }
}
module.exports = vaildName;
