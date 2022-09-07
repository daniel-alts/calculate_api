const supertest = require("supertest");
const server = require("../../app");

describe("Calculate", () => {
  it("POST /calculate: action: sum", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "sum",
      num1: 20,
      num2: 10,
    });
    // const expectedResult = 30
    // console.log({response})
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 30 }));
  });

  it("POST /calculate: action: subtract", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "subtract",
      num1: 200,
      num2: 100,
    });
    // const expectedResult = 30
    // console.log({response})
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 100 }));
  });

  it("POST /calculate: action: divide", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "divide",
      num1: 2530,
      num2: Math.PI,
    });
    // const expectedResult = 30
    // console.log({response})
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 805.3240120449905 }));
  });

  it("POST /calculate: action: multiply", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "multiply",
      num1: 30.6,
      num2: 25.45,
    });
    // const expectedResult = 30
    // console.log({response})
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 778.77 }));
  });
});
