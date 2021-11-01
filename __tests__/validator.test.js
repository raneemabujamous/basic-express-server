const { server } = require("../src/server");
const supertest = require("supertest");
const mockRequest = supertest(server);
describe("test valid name", () => {
  test("if name is valid and stuts ", async () => {
    const res = await mockRequest.get(`/person?name=raneem`);
    expect(res.body.name).toEqual("raneem");
    expect(res.status).toEqual(200);
  });
});
