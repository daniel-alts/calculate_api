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

describe("Calculate numbers", () =>{
    it("Should calculate subtraction of numbers", async () => {
       const response = await supertest(server).post('/calculate').send({
            action: "subtract",
            num1 : 50,
            num2 : 10
        })
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({result : 40}))
    })
})

describe("Calculate numbers", () =>{
    it("Should calculate divison of numbers", async () => {
       const response = await supertest(server).post('/calculate').send({
            action: "divide",
            num1 : 15,
            num2 : 3
        })
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({result : 5}))
    })
})

describe("Calculate numbers", () =>{
    it("Should calculate multiplication of numbers", async () => {
       const response = await supertest(server).post('/calculate').send({
            action: "multiply",
            num1 : 20,
            num2 : 5
        })
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({result : 100}))
    })
})