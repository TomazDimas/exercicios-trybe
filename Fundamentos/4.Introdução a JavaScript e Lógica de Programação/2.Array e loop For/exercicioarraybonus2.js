let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicados = [];

for (i = 0; i < numbers.length; i += 1) {
  if (i === numbers.length - 1) {
    let resultado = numbers[i] * 2;
    multiplicados.push(resultado);
  } else {
    let resultado = numbers[i] * numbers[i + 1];
    multiplicados.push(resultado);
  }
}

console.log(multiplicados);
