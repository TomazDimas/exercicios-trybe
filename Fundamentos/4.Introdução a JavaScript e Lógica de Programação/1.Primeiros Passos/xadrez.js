let peca = "RAINHA".toLowerCase();

let movimento;

if (peca == "peão" || peca == "rei") {
    movimento = "horizontal uma casa"
}

else if (peca == "torre") {
    movimento = "horizontal várias casas"
}

else if (peca == "bispo") {
    movimento = "diagonal várias casas"
}

else if (peca == "cavalo") {
    movimento = "em formato de L"
}

else if (peca == "rainha") {
    movimento = "várias casas em qualquer direção"
}

else {
    movimento = "ERRO!"
}

console.log(movimento);