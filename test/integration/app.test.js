const supertest = require('supertest');
const server = require('../../app');

describe('Calculate', () => {
	it('POST /calculate: action: sum', async () => {
		const response = await supertest(server).post('/calculate').send({
			action: 'sum',
			num1: 20,
			num2: 10,
		});
		expect(response.status).toBe(200);
		expect(JSON.stringify(response.body)).toBe(JSON.stringify({ result: 30 }));
	});
	it('POST /calculate: action: subtract', async () => {
		const response = await supertest(server).post('/calculate').send({
			action: 'subtract',
			num1: 18,
			num2: 5,
		});
		expect(response.status).toBe(200);
		expect(JSON.stringify(response.body)).toBe(JSON.stringify({ result: 13 }));
	});
	it('POST /calculate: action: divide', async () => {
		const response = await supertest(server).post('/calculate').send({
			action: 'divide',
			num1: 100,
			num2: 20,
		});
		expect(response.status).toBe(200);
		expect(JSON.stringify(response.body)).toBe(JSON.stringify({ result: 5 }));
	});
	it('POST /calculate: action: multiply', async () => {
		const response = await supertest(server).post('/calculate').send({
			action: 'multiply',
			num1: 51,
			num2: 3,
		});
		expect(response.status).toBe(200);
		expect(JSON.stringify(response.body)).toBe(JSON.stringify({ result: 153 }));
	});
});
