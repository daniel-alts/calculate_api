const supertest = require('supertest');
const server = require('../../app');
const { divide, multiply } = require('../../math');


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

    describe('Calculate', ()=>{
        it('post/calculate', async()=>{
            const response = await supertest(server).post('/calculate').send({
                action: 'subtract',
                num1: 40,
                num2: 30
    
            })
    expect(response.status).toBe(200)
    const x = response.body
    expect(JSON.stringify(x)).toBe(JSON.stringify({result:10}))
        })

        describe('calculate/post', ()=>{
            it('calculate/post', async ()=>{
                const response = await supertest(server).post('/calculate').send({
                    action: 'multiply',
                    num1: 1,
                    num2: 20
                })
                const x = response.body
                expect(JSON.stringify(x)).toBe(JSON.stringify({result:20}))
            })
        })
    })


    describe('divid/calculate', ()=>{
        it('post/cal', async()=>{
            const response = await supertest(server).post('/calculate').send({
                action: 'divide',
                num1 : 6,
                num2 : 3
            })
            const x = response.body
            expect(JSON.stringify(x)).toBe(JSON.stringify({result:2}))
        })
    })
    })