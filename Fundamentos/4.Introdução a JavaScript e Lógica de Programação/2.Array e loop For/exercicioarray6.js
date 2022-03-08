let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;

for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    contador += 1;
  }
}

if (contador === 0) {
  contador = "nenhum valor ímpar encontrado";
}

console.log(contador);
