// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedResult = new Error('Não temos esse pokémon para você :');
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', (error, message) => {
      try {
        expect(error).toEqual(expectedResult)
        done()
      } catch (error) {
        done(error) 
      }
    })
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedResult = `Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun`;
    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', (error, message) => {
      try {
        expect(message).toBe(expectedResult);
        done()
      } catch (error) {
        done(error)
      }
    })
  });
});

