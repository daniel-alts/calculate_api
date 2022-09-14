const supertest = require("supertest");
const server = require("../../app.js");

describe("POST/calculate: action: sum", () => {
  it("Getting the sum of numbers", async () => {
    const response = await supertest(server)
      .post("/calculate")
      .send({
        action: "sum",
        num1: 20,
        num2: 10,
      })
      // console.log({ response });
      .expect("Content-Type", "application/json");
    expect(response.status).toBe(200);
    // expect(response.body).toBe(JSON.stringify({ result: 30 }));
    expect(response.body).toBe(30);
  });
});

describe("POST/calculate: action: subtract", () => {
  it("Getting the subtracted value of numbers", async () => {
    const response = await supertest(server)
      .post("/calculate")
      .send({
        action: "subtract",
        num1: 20,
        num2: 10,
      })
      // console.log({ response });
      .expect("Content-Type", "application/json");
    expect(response.status).toBe(200);
    // expect(response.body).toBe(JSON.stringify({ result: 30 }));
    expect(response.body).toBe(10);
  });
});

describe("POST/calculate: action: divide", () => {
  it("Getting the divide value", async () => {
    const response = await supertest(server)
      .post("/calculate")
      .send({
        action: "divide",
        num1: 20,
        num2: 10,
      })
      // console.log({ response });
      .expect("Content-Type", "application/json");
    expect(response.status).toBe(200);
    // expect(response.body).toBe(JSON.stringify({ result: 30 }));
    expect(response.body).toBe(2);
  });
});

describe("POST/calculate: action: multiply", () => {
  it("Getting the multiply value", async () => {
    const response = await supertest(server)
      .post("/calculate")
      .send({
        action: "multiply",
        num1: 20,
        num2: 10,
      })
      // console.log({ response });
      .expect("Content-Type", "application/json");
    expect(response.status).toBe(200);
    // expect(response.body).toBe(JSON.stringify({ result: 30 }));
    expect(response.body).toBe(200);
  });
});
