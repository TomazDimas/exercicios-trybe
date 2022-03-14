let cabecalho = document.getElementById('header-container');
let tituloUrgente = document.getElementsByClassName('emergency-tasks');
let tituloNaoUrgente = document.getElementsByClassName('no-emergency-tasks');
let urgenteInterior = document.querySelectorAll('.emergency-tasks h3');
let naoUrgenteInterior = document.querySelectorAll('.no-emergency-tasks h3');
let rodape = document.getElementById('footer-container');
 
cabecalho.style.backgroundColor = '#00B06F';
tituloUrgente[0].style.backgroundColor = '#FF9A89';
tituloNaoUrgente[0].style.backgroundColor = '#FDD771';

for (i = 0; i < urgenteInterior.length; i += 1) {
    urgenteInterior[i].style.backgroundColor = '#A22BEB';
}

for (i = 0; i < naoUrgenteInterior.length; i += 1) {
    naoUrgenteInterior[i].style.backgroundColor = '#232525';
}

rodape.style.backgroundColor = '#003633'