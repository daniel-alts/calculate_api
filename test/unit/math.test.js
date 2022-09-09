const mathM = require('../../math');

test.only('sum: expect 30', () => {
    const actualResult = mathM.add(20, 10) 
    const expectResult = 30;
    expect(actualResult).toBe(expectResult)
});

test.only('sum: expect 45', () => {
    const actualResult = mathM.add(30, 15) 
    const expectResult = 45;
    expect(actualResult).toBe(expectResult)
});


test('subtract', () => {
    const actualResult = mathM.subtract(50, 10) 
    const expectResult = 40;
    expect(actualResult).toBe(expectResult)
});

test('divide', () => {
    const actualResult = mathM.divide(80, 2) 
    const expectResult = 40;
    expect(actualResult).toBe(expectResult)
});

test('multiply', () => {
    const actualResult = mathM.multiply(20, 20) 
    const expectResult = 400;
    expect(actualResult).toBe(expectResult)
});

