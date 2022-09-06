const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'sum',
            num1: 20,
            num2: 10
        })

        expect(response.status).toBe(200)
        expect(response.body).toStrictEqual({ result: 30 })
        expect(JSON.stringify(response.body)).toStrictEqual(JSON.stringify({ result: 30 }))
    })
})