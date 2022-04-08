// EXERCÍCIO 1
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((personB, personA) => personB.age - personA.age);

console.log(people);

// EXERCÍCIO 2
people.sort((personB, personA) => personA.age - personB.age)

console.log(people);