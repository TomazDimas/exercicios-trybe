const randomNumber = () => {
  const aleatorio = Math.floor(Math.random() * 100);
  return aleatorio;
}

const toUpperCase = (string) => {
  const uppered = string.toUpperCase();
  return uppered
}

const firstLetter = (string) => {
  const wordArray = string.split('');
  return wordArray[0]
}

const concatString = (str1, str2) => {
  return `${str1}${str2}`
}

module.exports = { randomNumber, toUpperCase, firstLetter, concatString };