const isDot = require('./isDot');

test('Deve retornar false para número', () => {
    expect(isDot("5")).toBe(false);
});
  
test('Deve retornar true para "."', () => {
    expect(isDot(".")).toBe(true);
});

test('String vazia', () => {
    expect(isDot("")).toBe(false);
});

test('Inserindo um número + . "1."', () => {
    expect(isDot("L")).toBe(false);
});
