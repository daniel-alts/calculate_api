const http = require('http');
const { add, subtract, multiply, divide, remainder } = require('./math')


const PORT = 3000;

const handleRequest = (req, res) => {
    const {url, method } = req;
    const body = [];
    let result
    res.setHeader("Content-Type", "application/json");
    if (url === '/calculate' && method === 'POST') {
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const bodyObject = JSON.parse(parsedBody);

            const { action, num1, num2 } = bodyObject

            if (action === 'sum') {
                result = add(num1, num2)
            } else if (action === 'subtract') {
                result = subtract(num1, num2)
            } else if (action === 'divide') {
                result = divide(num1, num2)
            } else if (action === 'multiply') {
                result = multiply(num1, num2)
            } else if (action === 'remainder') {
                result = remainder(num1, num2)
            }

            res.end(JSON.stringify({ result }))
        })

        
    }
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})

module.exports = server;
