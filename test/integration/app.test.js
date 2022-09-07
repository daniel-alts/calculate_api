const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const operation = {
            action: 'sum',
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(operation)

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 30 }))
    })

    it('POST /calculate: action: subtract', async () => {
        const operation = {
            action: 'subtract',
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(operation)
        expect(response.text).toBe(JSON.stringify({ result: 10 }))
    })

    it('POST /calculate: action: divide', async () => {
        const operation = {
            action: 'divide',
            num1: 30,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(operation)
        expect(response.text).toBe(JSON.stringify({ result: 3 }))
    })

    it('POST /calculate: action: multiply', async () => {
        const operation = {
            action: 'multiply',
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(operation)
        expect(response.text).toBe(JSON.stringify({ result: 200 }))
    })
})