const superTest = require("supertest");
const app = require("../app");

describe("Calculate", () => {
  it("POST /calculate: action: sum", async () => {
    const response = await superTest(app).post("/calculator").send({
      action: "divide",
      num1: 40,
      num2: 10,
    });
    // console.log({response})
    expect(response.status).toBe(200);
    expect(response.body.Result).toBe(4);
  });
});
