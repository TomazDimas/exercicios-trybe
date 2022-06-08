const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const changeNames1 = (nome, sobrenome) => ({
  type: 'CHANGE_NAMES_1',
  nome,
  sobrenome,
})

const changeNames2 = (nome, sobrenome) => ({
  type: 'CHANGE_NAMES_2',
  nome,
  sobrenome,
})

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'CHANGE_NAMES_1':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'CHANGE_NAMES_2':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const reducesCombinados = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer
});

const store = Redux.createStore(reducesCombinados);

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();

  document.getElementById('nome-1').innerHTML = meuPrimeiroReducer.nome
  document.getElementById('sobrenome-1').innerHTML = meuPrimeiroReducer.sobrenome
  document.getElementById('nome-2').innerHTML = meuSegundoReducer.nome
  document.getElementById('sobrenome-2').innerHTML = meuSegundoReducer.sobrenome
})

window.onload = () => {
  setTimeout(() => {
    //Seu dispatch vem aqui //
    store.dispatch(changeNames1('Tomaz', 'Dimas'))
    store.dispatch(changeNames2('Paulo', 'Silva'))
  }, 1000);
};