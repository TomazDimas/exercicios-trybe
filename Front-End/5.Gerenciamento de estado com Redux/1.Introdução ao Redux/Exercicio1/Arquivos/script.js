// const Redux = require('redux')

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer1 = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      }
    case 'PREVIOUS_COLOR':
    return {
      ...state,
      index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
    }
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      }
    default:
      return state
  }
};

const store = Redux.createStore(reducer1);

const botaoPrevious = document.getElementById('previous');
const botaoNext = document.getElementById('next');
const botaoRandom = document.getElementById('random');

botaoPrevious.addEventListener('click', () => {
  store.dispatch({type: 'PREVIOUS_COLOR'})
});

botaoNext.addEventListener('click', () => {
  store.dispatch({type: 'NEXT_COLOR'})
});

botaoRandom.addEventListener('click', () => {
  store.dispatch({type: 'RANDOM_COLOR'})
});

store.subscribe(() => {
  document.getElementById('value').innerHTML = store.getState().colors[store.getState().index];
  document.getElementById('container').style.background = store.getState().colors[store.getState().index]
  console.log(store.getState());
})

console.log(store.getState());