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
        expect(response.body).toBe(JSON.stringify({ result: 30 }))
    })

    it('POST /calculate: action: subtract. This test is for subtraction', async () => {
        const requestBody = {
            action: 'subtract',
            num1: 100,
            num2: 50
        }
        const res = await supertest(server).post('/calculate').send(requestBody)

        expect(res.status).toBe(200)
        expect(res.text).toBe(JSON.stringify({ result: 50 }))
    })

    it('POST /calculate: action: divide. This test is for division', async () => {
        const requestBody = {
            action: 'divide',
            num1: 666,
            num2: 2
        }
        const res = await supertest(server).post('/calculate').send(requestBody)

        expect(res.status).toBe(200)
        expect(res.text).toBe(JSON.stringify({ result: 333 }))
    })

    it('POST /calculate: action: multiply. This test is for multiplication', async () => {
        const requestBody = {
            action: 'multiply',
            num1: 100,
            num2: 50
        }
        const res = await supertest(server).post('/calculate').send(requestBody)

        expect(res.status).toBe(200)
        expect(res.text).toBe(JSON.stringify({ result: 5000 }))
    })
})