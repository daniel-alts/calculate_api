const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('sends a POST request to /calculate endpoint and carrys out the action: sum', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'sum',
            num1: 20,
            num2: 10
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 30 }))
    })

    it('sends a POST request to /calculate endpoint and carrys out the action: sum', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'multiply',
            num1: 2,
            num2: 3
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 6 }))
    })

    it('sends a POST request to /calculate endpoint and carrys out the action: subtract', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'subtract',
            num1: 30,
            num2: 10
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 20 }))
    })

    it('sends a POST request to /calculate endpoint and carrys out the action: sum', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'divide',
            num1: 28,
            num2: 2
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 14 }))
    })
})