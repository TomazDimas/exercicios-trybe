const randomNumber = () => {
  const aleatorio = Math.floor(Math.random() * 100);
  return aleatorio;
}

module.exports = { randomNumber };