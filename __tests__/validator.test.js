const { server } = require("../src/server");
const supertest = require("supertest");
const mockRequest = supertest(server);
describe("test valid name", () => {
  test("if name is valid", async () => {
    let queryString = "/person?name=raneem";
    const status = 200;
    const response = await mockRequest.get(queryString);
    expect(response.status).toBe(200);
    expect(response.queryString).toBe(200);
  });
});
