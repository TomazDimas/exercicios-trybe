let valores = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function paraNumero(romano) {
  romano = romano.toLowerCase();
  let numerico = romano.split("");
  let resultado = 0;
  for (key in romano) {
    numerico[key] = valores[romano[key]];
  }
  resultado = numerico[0];
  for (i = 0; i < romano.length - 1; i += 1) {
    if (numerico[i] < numerico[i + 1]) {
      resultado = numerico[i + 1] - resultado;
    } else {
      resultado = numerico[i + 1] + resultado;
    }
  }
  return resultado;
}

console.log(paraNumero("IV"));
console.log(paraNumero("II"));
console.log(paraNumero("MMXVIII"));
console.log(paraNumero("VI"));
