const subtrair = require('./subtrair');

test('Subtrair 5 - 2 deve ser igual a 3', () =>{
    expect(subtrair(5,2)).toBe(3)
})

test('Subtrair 0 - 0 deve ser igual a 0', () =>{
    expect(subtrair(0,0)).toBe(0)
})

test('Subtrair -2 - -2 deve ser igual a 0', () =>{
    expect(subtrair(-2,-2)).toBe(0)
})

test('Subtrair "3" - 3 deve ser igual a 0', () => {
    expect(subtrair("3",3)).toBe(0);
});