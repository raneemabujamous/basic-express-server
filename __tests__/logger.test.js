"use strict";
const loggerMiddleWare = require("../src/middleware/logger");
//only to test out our logger midflware we want if this conole log is accually runing
describe("test logger midleware", () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("if there any output", () => {
    loggerMiddleWare(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  test("should ", () => {});
});
