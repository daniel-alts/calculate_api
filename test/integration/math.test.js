const mathM = require("../../math");

describe("Calculate", () => {
  it("Division", () => {
    expect(mathM.divide(45, 5)).toBe(9);
  })
  it('Multiplication', ()=>{
    expect(mathM.multiply(8,6)).toBe(48)
  })
  it('Subtraction',()=>{
    expect(mathM.subtract(34,67)).toBe(-33);
  })
});
