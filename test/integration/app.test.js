const supertest = require("supertest");
const server = require("../../app");

describe("Calculate", () => {
  // testing sum
  it("POST /calculate: action: sum", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "sum",
      num1: 20,
      num2: 10,
    });

    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 30 }));
  });
  // testing subtract
  it("POST /calculate: action: subtract", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "subtract",
      num1: 20,
      num2: 10,
    });

    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 10 }));
  });
  // testing divide
  it("POST /calculate: action: divide", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "divide",
      num1: 20,
      num2: 10,
    });

    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 2 }));
  });
  // testing multiply
  it("POST /calculate: action: multiply", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "multiply",
      num1: 20,
      num2: 10,
    });

    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 200 }));
  });
});
