const supertest = require("supertest");
const server = require("../../app");

// Sum
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
});

// Subtract
describe("Calculate", () => {
  it("POST /calculate action: subtract", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "subtract",
      num1: 50,
      num2: 30,
    });

    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 20 }));
  });
});

// Divide
describe("Calculate", () => {
  it("POST /calculate action: divide", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "divide",
      num1: 100,
      num2: 25,
    });

    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 4 }));
  });
});

// Multiply
describe("Calculate", () => {
  it("POST /calculate action: multiply", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "multiply",
      num1: 20,
      num2: 5,
    });

    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ result: 100 }));
  });
});

// Exiting test
afterAll((done) => {
  server.close();
  done();
});
