const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'sum',
            num1: 20,
            num2: 10
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 30 }))
    })
    it('POST /calculate: action: division', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'divide',
            num1: 20,
            num2: 4
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 5 }))
    })
    it('POST /calculate: action: multiplication', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'multiply',
            num1: 12,
            num2: 5
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 60 }))
    })
    it('POST /calculate: action: subtraction', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'subtract',
            num1: 25,
            num2: 13
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 12 }))
    })
})
