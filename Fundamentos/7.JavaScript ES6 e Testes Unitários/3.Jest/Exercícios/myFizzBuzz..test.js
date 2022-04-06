const myFizzBuzz = require('./myFizzBuzz');

test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
})