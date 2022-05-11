import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    cor: '',
    nome: '',
    senha: '',
    texto: '',
    check: '',
  }

  handleChange = ({target}) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    })
  }

  render() {
    return (
      <div className="App">
      <form>
        <fieldset>
          <select value={this.state.cor} onChange={this.handleChange} name="cor">
            <option value="Azul">Azul</option>
            <option value="Verde">Verde</option>
            <option value="Amarelo">Amarelo</option>
          </select>
          <input value={this.state.nome} onChange={this.handleChange} type="text" name='nome'></input>
          <input value={this.state.senha} onChange={this.handleChange} type="password" name='senha'></input>
          <textarea value={this.state.texto} onChange={this.handleChange} name='texto'></textarea>
          <input value={this.state.check} onChange={this.handleChange} type="checkbox" name='check'></input>
        </fieldset>
      </form>
    </div>
   );
}
}

export default App;
