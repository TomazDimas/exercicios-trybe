const altura = 1.76;
const peso = 75;

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