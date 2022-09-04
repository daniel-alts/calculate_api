const supertest = require("supertest");
const server = require("../../app");

describe("Calculate", () => {
  it("POST /calculate that (20 + 10 = 30)", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "sum",
      num1: 20,
      num2: 10,
    });

    expect(response.status).toBe(200);
    expect(response.body.result).toBe(30);
  });

  it("POST /calculate that (20 - 10 = 10)", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "subtract",
      num1: 20,
      num2: 10,
    });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(10);
  });

  it("POST /calculate that (20 / 10 = 2)", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "divide",
      num1: 20,
      num2: 10,
    });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(2);
  });

  it("POST /calculate that (20 * 10 = 200)", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "multiply",
      num1: 20,
      num2: 10,
    });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(200);
  });
});
