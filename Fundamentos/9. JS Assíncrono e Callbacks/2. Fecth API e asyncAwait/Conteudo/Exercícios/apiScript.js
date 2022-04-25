// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const addJose = (sJoke) => {
  const jokeCointainer = document.getElementById('jokeContainer');
  const newJoke = document.createElement('p');
  newJoke.innerText = sJoke.joke;
  jokeCointainer.appendChild(newJoke);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => addJose(data))
}

window.onload = () => {
  fetchJoke();
};