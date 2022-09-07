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
        expect(response.text).toBe(JSON.stringify({ result: 30 }))
    })

    it('POST /calculate: action: sub', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'sub',
            num1: 20,
            num2: 10
        })

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 10 }))
    })

    it('POST /calculate: action: div', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'div',
            num1: 20,
            num2: 10
        })

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 2}))
    })

    it('POST /calculate: action: mul', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'mul',
            num1: 20,
            num2: 10
        })

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 200}))
    })
})
