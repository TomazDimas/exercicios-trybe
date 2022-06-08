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

// const fetchDog = async () => {
//   const response = await fetch('https://dog.ceo/api/breeds/image/random')
//   const object = await response.json();
//   return object.message
// }
function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

console.log(fetchDog());

module.exports = { randomNumber, toUpperCase, firstLetter, concatString };