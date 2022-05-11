import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    cor: '',
    nome: '',
    senha: '',
  }

  handleChange = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <form>
        <select>
          <option value="Azul">Azul</option>
          <option value="Verde">Verde</option>
          <option value="Amarelo">Amarelo</option>
        </select>
        <input value={this.state.nome} onChange={this.handleChange} type="text"></input>
        <input type="password"></input>
        <textarea></textarea>
      </form>
    </div>
   );
}
}

export default App;
