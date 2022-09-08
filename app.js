const http = require('http');
const mathM = require('./math')


const PORT = 3000;

const handleRequest = (req, res) => {
    const {url, method } = req;
    const body = [];
    let result = 0;

    if (url === '/calculate' && method === 'POST') {

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const bodyObject = JSON.parse(parsedBody);

            const { action, num1, num2 } = bodyObject
            // console.log('inside end', action, num1, num2)
            if (action === 'sum') {
                result = mathM.add(num1, num2)
            } else if (action === 'subtract') {
                result = mathM.subtract(num1, num2)
            } else if (action === 'divide') {
                result = mathM.divide(num1, num2)
            } else if (action === 'multiply') {
                result = mathM.multiply(num1, num2)
            }

            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({result}));
            res.end();
        })
    }
}

const server = http.createServer(handleRequest);

// server.listen(PORT, () => {
//     console.log(`Server is listening on port: ${PORT}`)
// })

module.exports = server;
