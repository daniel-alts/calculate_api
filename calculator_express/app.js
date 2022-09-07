const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mathM = require("./math");

app.use(bodyParser.json());
app.use(express.json());

// app.use((req, res, next) => {
//   //next();
// });

app.post("/calculator", (req, res) => {
  const action = req.body.action;
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  let result;
  if (action === "sum") {
    result = mathM.add(num1, num2);
  } else if (action === "subtract") {
    result = mathM.subtract(num1, num2);
  } else if (action === "divide") {
    result = mathM.divide(num1, num2);
  } else if (action === "multiply") {
    result = mathM.multiply(num1, num2);
  }
  console.log(`THE RESULT IS = ${result}`);
  res.send({ Result: result });
});

module.exports = app;
