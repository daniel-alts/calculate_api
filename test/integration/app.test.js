const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: Test for addition', async () => {
       const reqBody = {
            action: 'sum',
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(reqBody)

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 30}))
    })



    it("POST /calculate: action: Test for subtraction", async () => {
        const reqBody = {
            action: 'subtract',
            num1: 50,
            num2: 15
        }
        const response = await supertest(server).post("/calculate").send(reqBody)

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 35}))
    })



    it("POST /calculate: action: Test for division", async () => {
        const reqBody = {
            action: "divide",
            num1: 2000,
            num2: 10 
        }
        const response = await supertest(server).post("/calculate").send(reqBody)

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 200}))
    })



    it("POST /calculate: action: multiply", async () => {
       const reqBody = {
            action: "multiply",
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post("/calculate").send(reqBody)

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({result: 200}))
    })
})