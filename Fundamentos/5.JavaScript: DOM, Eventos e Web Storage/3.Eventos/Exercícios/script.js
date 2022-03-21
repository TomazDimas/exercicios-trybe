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

// EXERCICIO 3
function colorButton() {
  let vetorFeriados = document.querySelectorAll(".holiday");
  let botaoFeriados = document.getElementById("btn-holiday");

  botaoFeriados.addEventListener("click", function () {
    for (let i = 0; i < vetorFeriados.length; i += 1) {
      let diaFeriado = vetorFeriados[i];
      if (diaFeriado.style.background === "blue") {
        diaFeriado.style.background = "rgb(238,238,238)";
      } else {
        diaFeriado.style.background = "blue";
      }
    }
  });
}

colorButton();

// EXERCICIO 4
function criarBotaoDia(diaSemana) {
  let botaoNovo = document.createElement("button");
  let divBtnContainer = document.querySelector(".buttons-container");
  botaoNovo.innerText = diaSemana;
  botaoNovo.id = "btn-friday";
  divBtnContainer.appendChild(botaoNovo);
}

criarBotaoDia("Sexta-feira");

// EXERCICIO 5
function changeFridayName() {
  let botaoFriday = document.getElementById("btn-friday");
  let vetorFridays = document.getElementsByClassName("friday");
  let novoTexto = "Sextou BB 🍺";

  botaoFriday.addEventListener("click", function () {
    for (let i = 0; i < vetorFridays.length; i += 1) {
      if (vetorFridays[i].innerText !== novoTexto) {
        vetorFridays[i].innerText = novoTexto;
      } else {
        vetorFridays[i].innerText = valoresFridays[i];
      }
    }
  });
}

let valoresFridays = [4, 11, 18, 25];
changeFridayName();

// EXERCICIO 6
function zoomDias() {
  let arrayDias = document.getElementById("days");

  arrayDias.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "900";
  });
}

function zoomOutDias() {
  let arrayDias = document.getElementById("days");

  arrayDias.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "500";
  });
}

zoomDias();
zoomOutDias();

// EXERCICIO 7
function criarTarefa(tarefa) {
  let novaTarefa = document.createElement("span");
  let divMyTasks = document.querySelector(".my-tasks");

  novaTarefa.innerText = tarefa;
  divMyTasks.appendChild(novaTarefa);
}

criarTarefa("Cozinhar");

// EXERCICIO 8
function creatColorLegend(cor) {
  let novoDiv = document.createElement('div');
  let divMyTasks = document.querySelector(".my-tasks");

  novoDiv.classList = 'task';
  novoDiv.style.background = cor;

  divMyTasks.appendChild(novoDiv);
}

let corDecidida = 'blue'
creatColorLegend(corDecidida);

// EXERCICIO 9
function taskSelected() {
  let taskToSelect = document.querySelector('.task');
  let selectedTask = document.getElementsByClassName('task selected')

  taskToSelect.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.classList = 'task selected'
    } else {
      event.target.classList = 'task'
    }
  })
}

taskSelected();

// EXERCICIO 10
function addEventMonth() {
  let selectedTask = document.getElementsByClassName('task selected')
  let diasMes = document.querySelector('#days');
  let corOriginal = 'rgb(119,119,119)';
  let taskColor = document.querySelector('.task').style.background;

  diasMes.addEventListener('click', function(event) {
    let targetColor = event.target.style.color;
    if (selectedTask.length > 0 && targetColor !== taskColor) {
      event.target.style.color = selectedTask[0].style.background;
    } else if (selectedTask.length > 0 && targetColor === taskColor) {
      event.target.style.color = corOriginal;
    }
  })
}

addEventMonth();

// EXERCICIO BÔNUS
function addNewTask() {
  let inputTxt = document.querySelector('#task-input');
  let taskList = document.querySelector('.task-list');
  let addBtn = document.getElementById('btn-add');
  
  addBtn.addEventListener('click', function(){
    if (inputTxt.value.length > 0) {
      let newTask = document.createElement('li');
      newTask.innerText = inputTxt.value
      taskList.appendChild(newTask);
    } else {
      window.alert('Espaço Incompleto');
    }
  })
}

addNewTask();