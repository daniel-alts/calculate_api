const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const request = {
            action: "sum",
            num1: 20,
            num2: 10,
        }
        const response = await supertest(server).post('/calculate').send(request)
        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 30 }))
    })

    it('POST /calculate: action: divide', async () => {
        const request = {
            action: "divide",
            num1: 20,
            num2: 10,
        }
        const response = await supertest(server).post('/calculate').send(request)
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 2 }))
    })

    it('POST /calculate: action: multiply', async () => {
        const request = {
            action: "multiply",
            num1: 8,
            num2: 5,
        }
        const response = await supertest(server).post('/calculate').send(request)
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 40 }))
    })

    it('POST /calculate: action: subtract', async () => {
        const request = {
            action: "subtract",
            num1: 50,
            num2: 15,
        }
        const response = await supertest(server).post('/calculate').send(request)
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 35 }))
    })
})