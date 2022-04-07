const loteria = (apostado, callback) => {
  const correto = Math.floor(Math.random() * 5) + 1;
  return callback(apostado, correto)
}

const checkNumber = (palpite, sorteado) => {
  return palpite === sorteado ? 'Parabéns você ganhou!' : 'Tente novamente';
}

console.log(loteria(3, checkNumber));