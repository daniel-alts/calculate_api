const supertest = require("supertest");
const server = require("../../app");

describe("Calculate", () => {
  it("POST /calculate: action: sum", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "sum",
      num1: 20,
      num2: 10,
    });
    const expectedResult = JSON.stringify({ result: 30 });
    // console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ result: 30 });
  });
});
