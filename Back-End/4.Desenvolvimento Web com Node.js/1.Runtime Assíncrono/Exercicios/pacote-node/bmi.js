const readline = require('readline-sync');

const altura = readline.questionInt('Whats your height?');
const peso = readline.questionInt('What your weight?');

const calculateBMI = (alt, peso) => {
  console.log(`Altura: ${altura} e Peso: ${peso}`);
  const BMC = alt / Math.pow(peso, 2);
  return BMC
};

const main = () => {
  const bmi = calculateBMI(altura, peso);
  console.log(`Seu IMC é ${bmi}`);
};

main();