const http = require("http");
const mathM = require("./math");

const PORT = 3000;

function catchError() {
  res.writeHead(400).end(
    JSON.stringify({
      message: error,
    })
  );
}

const handleRequest = (req, res) => {
  const { url, method } = req;
  const body = [];
  let result;

  if (url === "/calculate" && method === "POST") {
    try {
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const bodyObject = JSON.parse(parsedBody);

        const { action, num1, num2 } = bodyObject;
        try {
          if (action === "sum") {
            result = mathM.add(num1, num2);
          } else if (action === "subtract") {
            result = mathM.subtract(num1, num2);
          } else if (action === "divide") {
            result = mathM.divide(num1, num2);
          } else if (action === "multiply") {
            result = mathM.multiply(num1, num2);
          } else {
            res.end("action not added!");
          }

          res.setHeader("Content-Type", "application/json");
          res.writeHead(200);
          res.end(JSON.stringify({ result }));
        } catch (error) {
          catchError;
        }
      });
    } catch (error) {
      catchError;
    }
  }
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

module.exports = server;
