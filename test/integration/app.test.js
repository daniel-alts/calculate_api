const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: "sum",
            num1: 20,
            num2: 10
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.body.result).toBe(30)
    }),

    it('post request used to calculate subtraction of two number', async () =>{
        const response = await  supertest(server).post('/calculate').send({
            action:"subtract",
            num1: 90,
            num2: 45

        })
        expect(response.status).toBe(200)
        expect(response.body.result).toBe(45)
    }),

    it('post request for calculating division', async () => {
        const response = await supertest(server).post('/calculate').send({
            action:"divide",
            num1:28,
            num2:7
        })
        expect(response.status).toBe(200)
        expect(response.body.result).toBe(4)
    }),

    it('A POST request for calculating multiplication', async () =>{
        const response = await supertest(server).post('/calculate').send({

            action:"multiply",
            num1:4,
            num2:7
        })
        expect(response.status).toBe(200)
        expect(response.body.result).toBe(28)
    })
})