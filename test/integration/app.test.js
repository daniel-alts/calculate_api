const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'sum',
            num1: 20,
            num2: 10
        })

        // console.log(response.body)
        expect(response.status).toBe(200)
        const x = response.body
        expect(JSON.stringify(x)).toBe(JSON.stringify({result:30}))
        // expect(response.body).toBe(JSON.stringify({result: 30}));
    })
})