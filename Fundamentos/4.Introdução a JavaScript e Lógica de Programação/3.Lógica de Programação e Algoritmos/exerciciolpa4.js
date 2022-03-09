let maiorNumero = 0;

for (let nAtual = 0; nAtual <= 50; nAtual += 1) {
    let ePrimo = true;
    for (let divisor = 2; divisor < nAtual; divisor += 1) {
        if (nAtual % divisor == 0) {
            ePrimo = false;
        }
    }
    if (ePrimo == true) {
        maiorNumero = nAtual;
    }
}

console.log(maiorNumero);
