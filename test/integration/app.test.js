const supertest = require("supertest");
const server = require("../../app");

describe("Testing Calculate API", () => {
	// Testing / route.
	test("GET /", async () => {
		const { status, body } = await supertest(server).get("/");

		expect(status).toBe(200);
		expect(body).toEqual({ message: "Welcome to Calculate API" });
	});

	// Testing sum route.
	test("POST /calculate: action: sum", async () => {
		const response = await supertest(server).post("/calculate").send({
			action: "sum",
			num1: 20,
			num2: 10,
		});

		expect(response.status).toBe(200);
		expect(response.body).toEqual({ result: 30 });
	});

	// Testing subtract route.
	test("POST /calculate: action: subtract", async () => {
		const response = await supertest(server).post("/calculate").send({
			action: "subtract",
			num1: 20,
			num2: 10,
		});

		expect(response.status).toBe(200);
		expect(response.body).toEqual({ result: 10 });
	});

	// Testing divide route.
	test("POST /calculate: action: divide", async () => {
		const response = await supertest(server).post("/calculate").send({
			action: "divide",
			num1: 20,
			num2: 10,
		});

		expect(response.status).toBe(200);
		expect(response.body).toEqual({ result: 2 });
	});

	// Testing multiply route.
	test("POST /calculate: action: multiply", async () => {
		const response = await supertest(server).post("/calculate").send({
			action: "multiply",
			num1: 20,
			num2: 10,
		});

		expect(response.status).toBe(200);
		expect(response.body).toEqual({ result: 200 });
	});
});
