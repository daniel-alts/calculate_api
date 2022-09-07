const http = require('http');
const supertest = require("supertest");
const app = require("../../app");

describe("Calculate", () => {
  let server;

  beforeAll((done) => {
    server = http.createServer(app.handleRequest);
    server.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

	it("POST /calculate: action: sum", async () => {
		const response = await supertest(server).post("/calculate").send({
			action: "sum",
			num1: 20,
			num2: 10,
		});

		expect(response.status).toBe(200);
		expect(response.text).toBe(JSON.stringify({ result: 30 }));
	});

	it("POST /calculate: action: subtract", async () => {
		const response = await supertest(server).post("/calculate").send({
			action: "subtract",
			num1: 20,
			num2: 10,
		});

		expect(response.status).toBe(200);
		expect(response.text).toBe(JSON.stringify({ result: 10 }));
	});

	it("POST /calculate: action: divide", async () => {
		const response = await supertest(server).post("/calculate").send({
			action: "divide",
			num1: 20,
			num2: 10,
		});

		expect(response.status).toBe(200);
		expect(response.text).toBe(JSON.stringify({ result: 2 }));
	});

	it("POST /calculate: action: multiply", async () => {
		const response = await supertest(server).post("/calculate").send({
			action: "multiply",
			num1: 2,
			num2: 10,
		});

		expect(response.status).toBe(200);
		expect(response.text).toBe(JSON.stringify({ result: 20 }));
	});
});
