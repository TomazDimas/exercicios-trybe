// arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>a
let voce = document.getElementById('elementoOndeVoceEsta');

let pai = voce.parentElement
pai.style.color = 'blue'
 
let primeiroFilhoDoFilho = voce.firstElementChild;
primeiroFilhoDoFilho.innerHTML = 'oi'

let primeiroFilho = pai.firstElementChild;
let primeiroFilho2 = voce.previousElementSibling;
let textoAtencao = voce.nextSibling;
let terceiroFilho = voce.nextElementSibling;
let terceiroFilho2 = pai.lastElementChild.previousElementSibling;

let novoIrmao = document.createElement('section');
novoIrmao.id = 'quintoFilho';
pai.appendChild(novoIrmao);

let filhoVoce = document.createElement('section');
filhoVoce.id = 'filhoVoce';
voce.appendChild(filhoVoce);

let primeiroFilhoDoFilho2 = voce.firstElementChild;
let filhoDoFilhoDoFilho = document.createElement('section');
filhoDoFilhoDoFilho.id = 'filhoDoFilhoDoFilho';
primeiroFilhoDoFilho2.appendChild(filhoDoFilhoDoFilho);

let terceiroFilho3 = filhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho3);