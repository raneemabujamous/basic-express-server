"use strict";
//test all end point
const { server } = require("../src/server");
const supertest = require("supertest");
const mockRequest = supertest(server);
describe("test end point", () => {
  test("test home page is run", async () => {
    const response = await mockRequest.get("/home");
    expect(response.status).toBe(200);
  });
  test("404 is handle", async () => {
    const response = await mockRequest.get("/raneem");
    expect(response.status).toBe(404);
  });
  test("500 is handle", async () => {
    const response = await mockRequest.get("/error");
    expect(response.status).toBe(500);
  });
});
