const mathM = require('../../math');

describe('math', () => {
    it('sum: expect 30', () => {
        const actualResult = mathM.add(20, 10) 
        const expectResult = 30;
        expect(actualResult).toBe(expectResult)
    });

    it('sum: expect 45', () => {
        const actualResult = mathM.add(15, 30)
        const expectResult = 45;
        expect(actualResult).toBe(expectResult)
    });
    
    it('subtract: expect 10', () => {
        const actualResult = mathM.subtract(20, 10) 
        const expectResult = 10;
        expect(actualResult).toBe(expectResult)
    });
    
    it('divide: expcet 2', () => {
        const actualResult = mathM.divide(20, 10) 
        const expectResult = 2;
        expect(actualResult).toBe(expectResult)
    });
    
    it('multiply: expect 200', () => {
        const actualResult = mathM.multiply(20, 10) 
        const expectResult = 200;
        expect(actualResult).toBe(expectResult)
    });
    
    
})
