const mathM = require("../../math");

test("sum: expect 30", () => {
  const actualResult = mathM.add(20, 10);
  const expectResult = 30;
  expect(actualResult).toBe(expectResult);
});

test("sum: expect 50", () => {
  const actualResult = mathM.add(25, 25);
  const expectResult = 50;
  expect(actualResult).toBe(expectResult);
});

test("subtract", () => {
  const actualResult = mathM.subtract(20, 10);
  const expectResult = 10;
  expect(actualResult).toBe(expectResult);
});

test("divide", () => {
  const actualResult = mathM.divide(20, 10);
  const expectResult = 2;
  expect(actualResult).toBe(expectResult);
});

test("multiply", () => {
  const actualResult = mathM.multiply(20, 10);
  const expectResult = 200;
  expect(actualResult).toBe(expectResult);
});
