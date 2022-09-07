const mathT = require("../math");

test("test sum of 2 and 1", () => {
  expect(mathT.add(2, 1)).toBe(3);
});
test("test substract of 2 and 1", () => {
  expect(mathT.subtract(2, 1)).toBe(1);
});
test("test divide of 6 and 2", () => {
  expect(mathT.divide(6, 2)).toBe(3);
});
test("test multiply of 2 and 1", () => {
  expect(mathT.multiply(2, 1)).toBe(2);
});
