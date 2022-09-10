const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: add', async () => {
        const response = await supertest(server).post('/calculate').send({
            "action": 'add',
            "num1": 20,
            "num2": 10
        })
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(30);
        
    });

    it('POST /calculate: action: multiply', async () => {
        const response = await supertest(server).post('/calculate').send({
            "action": 'multiply',
            "num1": 8,
            "num2": 100
        })
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(800);
        
    });

    it('POST /calculate: action: divide', async () => {
        const response = await supertest(server).post('/calculate').send({
            "action": 'divide',
            "num1": 100,
            "num2": 2
        })
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(50);
        
    });

    it('POST /calculate: action: subtract', async () => {
        const response = await supertest(server).post('/calculate').send({
            "action": 'subtract',
            "num1": 8,
            "num2": 100
        })
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(-92);
        
    });
    
});