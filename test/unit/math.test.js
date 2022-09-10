const mathM = require('../../math');

test('add 20 + 10', () => {
    const actualResult = mathM.add(20, 10) 
    const expectResult = 30;
    expect(mathM.add(20, 10)).toBe(30)
});

test('add 15 + 30', () => {
    const actualResult = mathM.add(15, 30)
    const expectResult = 45;
    expect(mathM.add(15, 30)).toBe(45)
});

test('subtract 20 - 10', () => {
    const actualResult = mathM.subtract(20, 10) 
    const expectResult = 10;
    expect(mathM.subtract(20, 10)).toBe(10)
});

test('divide 20 / 10', () => {
    const actualResult = mathM.divide(20, 10) 
    const expectResult = 2;
    expect(mathM.divide(20, 10)).toBe(2)
});

test('multiply 20 * 10', () => {
    const actualResult = mathM.multiply(20, 10) 
    const expectResult = 200;
    expect(mathM.multiply(20, 10)).toBe(200)
});
