const supertest = require("supertest");
const server = require("../../app");

describe("Calculate", () => {
	it("Send POST request to /calculate endpoint. Test for addition'", async () => {
		const response = await supertest(server)
			.post("/calculate")
			.send({
				action: "sum",
				num1: 20,
				num2: 10,
			});

		console.log(response.body);
		expect(response.status).toBe(200);

		expect(JSON.stringify(response.body)).toBe(
			JSON.stringify({
				result: 30,
			})
		);
	});

	it("Send POST request to /calculate endpoint. Test for Multiplication'", async () => {
		const response = await supertest(server)
			.post("/calculate")
			.send({
				action: "multiply",
				num1: 20,
				num2: 10,
			});

		expect(response.status).toBe(200);
		expect(response.body.result).toBe(200);
	});
	it("Send POST request to /calculate endpoint. Test for division", async () => {
		const response = await supertest(server)
			.post("/calculate")
			.send({
				action: "divide",
				num1: 20,
				num2: 10,
			});

		expect(response.status).toBe(200);
		expect(JSON.stringify(response.body)).toBe(
			JSON.stringify({ result: 2 })
		);
	});
	it("Send POST request to /calculate endpoint. Test for subtraction", async () => {
		const response = await supertest(server)
			.post("/calculate")
			.send({
				action: "subtract",
				num1: 20,
				num2: 10,
			});
		console.log(response.body);
		expect(response.status).toBe(200);
		expect(response.text).toBe(
			JSON.stringify({ result: 10 })
		);
	});
});
