const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const cal= {
            "action": "sum",
            "num1": 20,
            "num2": 10,
          
        }
        const response = await supertest(server).post('/calculate').send(cal)

         console.log({response})
        expect(response.status).toBe(200)
       
        expect(response.text).toBe(JSON.stringify({ result: 30 }))
    })

    it('POST /calculate: action: divide', async () => {
        const cal= {
            "action": "divide",
            "num1": 400,
            "num2": 10,
          
        }
        const response = await supertest(server).post('/calculate').send(cal)

         console.log({response})
        expect(response.status).toBe(200)
       
        expect(response.text).toBe(JSON.stringify({ result: 40 }))
    })

    it('POST /calculate: action: multiply', async () => {
        const cal= {
            "action": "multiply",
            "num1": 20,
            "num2": 10,
          
        }
        const response = await supertest(server).post('/calculate').send(cal)

         console.log({response})
        expect(response.status).toBe(200)
       
        expect(response.text).toBe(JSON.stringify({ result: 200 }))
    })

    it('POST /calculate: action: subtract', async () => {
        const cal= {
            "action": "subtract",
            "num1": 20,
            "num2": 10,
          
        }
        const response = await supertest(server).post('/calculate').send(cal)

         console.log({response})
        expect(response.status).toBe(200)
       
        expect(response.text).toBe(JSON.stringify({ result: 10 }))
    })
})