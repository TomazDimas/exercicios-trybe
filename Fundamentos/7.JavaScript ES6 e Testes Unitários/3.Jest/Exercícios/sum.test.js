const { TestWatcher } = require("jest");
const sum = require("./sum");

describe('Testes da função sum', () => {
  test("Teste de soma de números inteiros", () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  test('Teste de input de string', () => {
    expect(() => sum(4, '5')).toThrow();
  })
})

