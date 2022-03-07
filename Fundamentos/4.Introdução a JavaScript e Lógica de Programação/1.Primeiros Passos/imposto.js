const salario = 2000;
let inss;
let ir;
let salarioLiquido;

if (salario <= 1556.94) {
    inss = 0.08 * salario
}
else if (salario <= 2594.92) {
    inss = 0.09 * salario
}
else if (salario <= 5189.82) {
    inss = 0.11 * salario
}
else {
    inss = 570.88
}

const salarioDescontado = salario - inss

if (salarioDescontado <= 1903.98) {
    ir = 0
}
else if (salarioDescontado <= 2826.65) {
    ir = (0.075 * salarioDescontado) - 142.8
}
else if (salarioDescontado <= 3751.05) {
    ir = (0.15 * salarioDescontado) - 354.8
}
else if (salarioDescontadoo <= 4664.68) {
    ir = (0.225 * salarioDescontado) - 636.13
}
else {
    ir = (0.275 * salarioDescontado) - 869.36
}

salarioLiquido = salarioDescontado - ir
console.log("Salário Líquido:",salarioLiquido);