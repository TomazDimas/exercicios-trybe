let numeroContador = 0;
const contador = document.getElementById('contador');

document.getElementById('botao').addEventListener('click', () => contador.innerText = numeroContador += 1);