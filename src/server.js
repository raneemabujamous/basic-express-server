"use strict";
const express = require("express");
const app = express();
require("dotenv").config();
const logger = require("./middleware/logger");
const handle404error = require("./error-handlers/404");
const handle500eror = require("./error-handlers/500");
const vaildName = require("./middleware/logger");
const PORT = process.env.PORT;
app.get("/home", (req, res) => {
  res.status(200).send("hi from home route");
});
app.put("/home", (req, res) => {
  res.status(200).send("hi from home route");
});
app.use("*", handle404error);
app.use(logger);
app.use(handle500eror);
app.get("/error", (req, res, next) => {
  throw new Error("You made an Error 500 🛑❗");
});
app.get("/person", vaildName, (req, res) => {
  res.send({
    name: req.name,
  });
});

function start() {
  app.listen(PORT, () => {
    console.log(`start function work and listen to ${PORT}`);
  });
}
module.exports = {
  server: app,
  start: start,
};
