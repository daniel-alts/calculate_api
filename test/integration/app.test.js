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

    it('POST /calculate: action: subtract', async () => {
        const dataToSend = {
            action: "subtract",
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(dataToSend);
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 10}))
    })

    it('POST /calculate: action: multiply', async () => {
        const dataToSend = {
            action: "multiply",
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(dataToSend)
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result:200}))
    })

    it('POST /calculate: action: divide', async () => {
        const dataToSend = {
            action: "divide",
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(dataToSend)
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 2}))
        

    })
})