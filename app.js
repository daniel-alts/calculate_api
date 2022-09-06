const http = require('http');
const mathM = require('./math')


const PORT = 3000;
const HOSTNAME = 'localhost'

const handleRequest = (req, res) => {
    const {url, method } = req;
    const body = [];
    let result

    if (url === '/calculate' && method === 'POST') {
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const bodyObject = JSON.parse(parsedBody);

            const { action, num1, num2 } = bodyObject

            if (action === 'sum') {
                result = mathM.add(num1, num2)
            } else if (action === 'subtract') {
                result = mathM.subtract(num1, num2)
            } else if (action === 'divide') {
                result = mathM.divide(num1, num2)
            } else if (action === 'multiply') {
                result = mathM.multiply(num1, num2)
            }

            res.end(JSON.stringify({ result }))
        })

        
    }
}

const server = http.createServer(handleRequest);

server.listen(PORT,HOSTNAME,  () => {
    console.log(`Server is listening on port http://${HOSTNAME}:${PORT}`)
})

module.exports = server;
