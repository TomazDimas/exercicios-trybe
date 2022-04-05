const sum = require("./sum");

test("Teste de soma de números inteiros", () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(1);
});
