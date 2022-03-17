function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// EXERCICIO 1
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  let listaDias = document.querySelector("#days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let diaValor = dezDaysList[i];
    let diaCriado = document.createElement("li");
    diaCriado.innerText = diaValor;
    diaCriado.classList.add("day");

    if (diaValor === 24 || diaValor === 31) {
      diaCriado.classList.add("holiday");
    } else if (diaValor === 4 || diaValor === 11 || diaValor === 18) {
      diaCriado.classList.add("friday");
    } else if (diaValor === 25) {
      diaCriado.classList.add("holiday");
      diaCriado.classList.add("friday");
    }
    listaDias.appendChild(diaCriado);
  }
}
createDaysOfTheMonth();

// EXERCICIO 2
function createButton(nomeBotao) {
  let containerBotao = document.querySelector(".buttons-container");
  let botao = document.createElement("button");
  let idBotao = "btn-holiday";

  botao.innerHTML = nomeBotao;
  botao.id = idBotao;
  containerBotao.appendChild(botao);
}

createButton("Feriados");
