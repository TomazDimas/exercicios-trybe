const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Teste Exercício 7', () => {
  test('Teste 1', (done) => {
    const expectedResult = 'TOMAZ';
    function callback(result) {
      try {
        expect(result).toBe(expectedResult);
        done()
      } catch (error) {
        done(error)
      }
    }      
    uppercase('tomaz', callback);
  })
})