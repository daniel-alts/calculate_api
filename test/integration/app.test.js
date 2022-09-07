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
})

it('Send POST request to /calculate endpoint. Test for subtraction', async () => {
    const reqBody = {
        action: 'subtract',
        num1: 100,
        num2: 70
    }
    const response = await supertest(server).post('/calculate').send(reqBody)

    expect(response.status).toBe(200)
    expect(response.text).toBe(JSON.stringify({ result: 30 }))
})

it('Send POST request to /calculate endpoint. Test for division', async () => {
    const reqBody = {
        action: 'divide',
        num1: 60,
        num2: 2
    }
    const response = await supertest(server).post('/calculate').send(reqBody)

    expect(response.status).toBe(200)
    expect(response.text).toBe(JSON.stringify({ result: 30 }))
})

it('Send POST request to /calculate endpoint. Test for multiplication', async () => {
    const reqBody = {
        action: 'multiply',
        num1: 100,
        num2: 3
    }
    const response = await supertest(server).post('/calculate').send(reqBody)

    expect(response.status).toBe(200)
    expect(response.text).toBe(JSON.stringify({ result: 300 }))
})
