const server = require('../../app');
const supertest = require('supertest')


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const response = await supertest(server).post("/calculate").send({
            action: 'sum',
            num1: 20,
            num2: 10
        })
        expect(response.status).toBe(200)
        expect(response.body).toBe(JASON.stringify({result:30})
    }) 
})