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

    it('Should Subtarct Num1 from Num1, when POST /calculate: action== subtract', async()=>{
        const response = await supertest(server).post('/calculate').send({
            action: 'subtract',
            num1: 50,
            num2: 20
        })

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({result: 30}))


    })

    
    it('Should divide Num1 by Num2, when POST /calculate: action== divide', async()=>{
        const response = await supertest(server).post('/calculate').send({
            action: 'divide',
            num1: 100,
            num2: 20
        })

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({result: 5}))


    })


    it('Should multiply  Num1 with Num2, when POST /calculate: action== multiply', async()=>{
        const response = await supertest(server).post('/calculate').send({
            action: 'multiply',
            num1: 10,
            num2: 20
        })

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({result: 200}))


    })
})


