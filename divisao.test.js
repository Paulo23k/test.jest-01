const divisao = require ('./divisao');

test ('Divisão de 10 / 2 é igual a 5', () => {
    expect(divisao(10, 2)).toBe(5);
    });

test ('Divisão de 9 / 3 é igual a 3', () => {
    expect(divisao(9, 3)).toBe(3);
    });

test ('Divisão de -9 / -3 é iguaç a 3', () => {
    expect(divisao(-9, -3)).toBe(3)
    });

test ('Divisão de -9 / 3 é igual a -3', () => {
    expect(divisao(-9, 3)).toBe(-3)
    });

test ('Divisão de 9 / -3 é igual a -3', () => {
    expect(divisao(9, -3)).toBe(-3)
    });

    test('Divisão de 1 / 0 não pode dividir por 0', () => {
        expect(divisao(1, 0)).toBe('Divisão por zero');
      });
      


