
const sum = require('./operations');
const subtract = require('./operations');
const multiply = require('./operations');
const divide = require('./operations');

test('Testa a operação de soma', ()=> {
    expect(sum(1, 2)).toBe(3);
});

test('Testa a operação de subtração', ()=> {
    expect(subtract(4, 4)).toBe(2);
});

test('Testa a operação de multiplicação', ()=> {
    expect(multiply(5, 2)).toBe(10);
});

test('Testa a operação de divisão', ()=> {
    expect(divide(20, 4)).toBe(5);
});