const { add, subtract, divide, multiply } = require('../../math');

test('sum: expect 30', () => {
    const actualResult = add(20, 10) 
    const expectResult = 30;
    expect(actualResult).toBe(expectResult)
});

test('sum: expect 45', () => {
    const actualResult = add(15, 30)
    const expectResult = 45;
    expect(actualResult).toBe(expectResult)
});

test('subtract', () => {
    const actualResult = subtract(20, 10) 
    const expectResult = 10;
    expect(actualResult).toBe(expectResult)
});

test('divide', () => {
    const actualResult = divide(20, 10) 
    const expectResult = 2;
    expect(actualResult).toBe(expectResult)
});

test('multiply', () => {
    const actualResult = multiply(20, 10) 
    const expectResult = 200;
    expect(actualResult).toBe(expectResult)
});
