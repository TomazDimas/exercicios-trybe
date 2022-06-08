// const Redux = require('redux')

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer1 = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === 5 ? 0 : state.index + 1,
      }
    case 'PREVIOUS_COLOR':
    return {
      ...state,
      index: state.index === 0 ? 5 : state.index - 1,
    }
    default:
      return state
  }
};

const store = Redux.createStore(reducer1);

const botaoPrevious = document.getElementById('previous');
const botaoNext = document.getElementById('next');

botaoPrevious.addEventListener('click', () => {
  store.dispatch({type: 'NEXT_COLOR'})
});

botaoNext.addEventListener('click', () => {
  store.dispatch({type: 'PREVIOUS_COLOR'})
});

console.log(store.getState());