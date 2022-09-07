/* 
The test failed because the response object dosen't have "body" property
which we are trying to access with response.body.
so what we need to access is actually response.text

Alternatively to use response.body, we can set the content-type to application/json
with res.setHeader('Content-Type', 'application/json');
then with this the body property gets added to response object and can be access 
with response.body or response._body 

then we can test it with
// expect(response.body).toEqual({ result: 30 })

note: expect(response.body).toBe({ result: 30 }) will make the test to fail
*/


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
        // expect(response.body).toEqual({ result: 30 })
    })


    it('POST /calculate: action: subtract', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'subtract',
            num1: 20,
            num2: 10
        })

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 10 }))
    })

    it('POST /calculate: action: divide', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'divide',
            num1: 20,
            num2: 10
        })

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 2}))
    })

    it('POST /calculate: action: multiply', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'multiply',
            num1: 20,
            num2: 10
        })

        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 200}))
    })
})