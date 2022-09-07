const supertest = require("supertest");
const server = require("../../app");

describe("Calculate", () => {
  it("POST /calculate: action: sum", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "sum",
      num1: 20,
      num2: 10,
    });

    // console.log({response})
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 30 }));
  });
  it("P0ST /calculate: action: divide", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "divide",
      num1: 20,
      num2: 5,
    });
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 4 }));
  });
  it("P0ST /calculate: action: multiply", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "multiply",
      num1: 20,
      num2: 5,
    });
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 100 }));
  });
  it("P0ST /calculate: action: subtract", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "subtract",
      num1: 20,
      num2: 5,
    });
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 15 }));
  });
});
