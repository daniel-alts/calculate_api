const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const AddNum = {
            action: 'sum',
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(AddNum)
        expect(response.status).toBe(200)
        const ExpectedResult = {result:30}
        expect(response.text).toBe(JSON.stringify(ExpectedResult))
    })

    it('POST /calculate: action: subtract', async () => {
        const SubNum = {
            action: 'subtract',
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(SubNum)
        expect(response.status).toBe(200)
        const ExpectedResult = {result:10}
        expect(response.text).toBe(JSON.stringify(ExpectedResult))
    })

    it('POST /calculate: action: divide', async () => {
        const DivNum = {
            action: 'divide',
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(DivNum)
        expect(response.status).toBe(200)
        const ExpectedResult = {result:2}
        expect(response.text).toBe(JSON.stringify(ExpectedResult))
    })

    it('POST /calculate: action: multiply', async () => {
        const MultNum = {
            action: 'multiply',
            num1: 20,
            num2: 10
        }
        const response = await supertest(server).post('/calculate').send(MultNum)
        expect(response.status).toBe(200)
        const ExpectedResult = {result:200}
        expect(response.text).toBe(JSON.stringify(ExpectedResult))
    })

})