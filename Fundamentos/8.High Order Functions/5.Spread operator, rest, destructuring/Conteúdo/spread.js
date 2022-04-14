// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Banana', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Ninho', 'Leite Condensado', 'Granola'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));