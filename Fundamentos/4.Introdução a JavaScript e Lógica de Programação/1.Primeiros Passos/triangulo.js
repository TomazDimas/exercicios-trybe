let a = 60;
let b = 60;
let c = -60;
let resultado;

if (a + b + c == 180) {
    resultado = true
}

else if (a < 0 || b < 0 || c < 0) {
    resultado = "ERRO!"
}

else {
    resultado = false
}

console.log(resultado);