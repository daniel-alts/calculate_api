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
        expect(response.body).toStrictEqual({"result": 30});
    })

    
    // it('POST /calculate: action: divide', async () => {
    //     const response = await supertest(server).post('/calculate').send({
    //         action: 'divide',
    //         num1: 20,
    //         num2: 10
    //     });

    //     expect(response.status).toBe(200);

    //     const body = [];
    //     response.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     response.on('end', () => {
    //         const parsedBody = Buffer.concat(body).toString();
    //         expect(parsedBody).toBe(JSON.stringify({ result: 2 }))
    //     }); 
    // });


    // it('POST /calculate: action: multiply', async () => {
    //     const response = await supertest(server).post('/calculate').send({
    //         action: 'multiply',
    //         num1: 20,
    //         num2: 10
    //     });

    //     expect(response.status).toBe(200);

    //     const body = [];
    //     response.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     response.on('end', () => {
    //         const parsedBody = Buffer.concat(body).toString();
    //         expect(parsedBody).toBe(JSON.stringify({ result: 200 }))
    //     }); 
    // });


    // it('POST /calculate: action: subtract', async () => {
    //     const response = await supertest(server).post('/calculate').send({
    //         action: 'subtract',
    //         num1: 20,
    //         num2: 10
    //     });
    //     expect(response.status).toBe(200);

    //     const body = [];
    //     response.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     response.on('end', () => {
    //         const parsedBody = Buffer.concat(body).toString();
    //         expect(parsedBody).toBe(JSON.stringify({ result: 10 }))
    //     }); 
    // });
})