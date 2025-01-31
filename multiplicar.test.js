const multiplicar = require('./multiplicar');

test("Multiplicacão de 3 * 4 igual a 12", () => {
    expect(multiplicar(3, 4)).toBe(12);
});

test("Multiplicacão de -1 * -1 igual a 1", () => {
    expect(multiplicar(-1, -1)).toBe(1);
});

test("Multiplicacão de 0 * 5 igual a 0", () => {
    expect(multiplicar(0, 5)).toBe(0);
});