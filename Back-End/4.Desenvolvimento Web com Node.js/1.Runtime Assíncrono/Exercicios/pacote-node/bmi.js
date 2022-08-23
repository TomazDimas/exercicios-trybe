const readline = require('readline-sync');

const altura = readline.questionFloat('Whats your height?');
const peso = readline.questionInt('What your weight?');

const calculateBMI = (alt, peso) => {
  console.log(`Altura: ${altura} e Peso: ${peso}`);
  const BMC = alt / Math.pow(peso, 2);
  return BMC
};

const main = () => {
  const bmi = calculateBMI(altura, peso);
  console.log(`Seu IMC é ${bmi}`);
  if (bmi < 18.5) {
    console.log('Status: Underweight (thin)');
    return;
  }

  if (bmi >= 18.5 && bmi < 25) {
    console.log('Status: Normal weight');
    return;
  }

  if (bmi >= 25 && bmi < 30) {
    console.log('Status: Overweight (overweight)');
    return;
  }

  if (bmi >= 30 && bmi < 35) {
    console.log('Status: Grade I obesity');
    return;
  }

  if (bmi >= 35 && bmi < 40) {
    console.log('Status: Grade II obesity');
    return;
  }

  console.log('Status: Obesity grades III and IV');
};

main();