const valorCusto = 10;
const valorVenda = 50;
let impostoSobreOCusto = 0.2 * valorCusto;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;
let valorFinal;

if (valorCusto < 0 || valorVenda < 0) {
    valorFinal = "Erro! Um dos valores inseridos é menor que 0."
}
else {
    valorFinal = 1000 * lucro
}

console.log(valorFinal);