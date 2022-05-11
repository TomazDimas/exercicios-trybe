import './App.css';
import React from 'react';

class App extends React.Component {
  
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.state = {
      contagemBotao1: 0,
      contagemBotao2: 0,
      contagemBotao3: 0,
    }
  }

  handleClick1() {
    console.log('oi');
    console.log(this);
    this.setState((estadoAnterior, _props) => ({
      contagemBotao1: estadoAnterior.contagemBotao1 + 1,
    }))
    console.log(this.state);
  }


  handleClick2() {
    console.log('olá');
    console.log(this);
    this.setState((estadoAnterior, _props) => ({
      contagemBotao2: estadoAnterior.contagemBotao2 + 1,
    }))
    console.log(this.state);
  }


  handleClick3 = () => {
    console.log('tudo bom?');
    console.log(this);
    this.setState((estadoAnterior, _props) => ({
      contagemBotao3: estadoAnterior.contagemBotao3 + 1,
    }))
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick1}>Botão1</button>
        <button onClick={this.handleClick2}>Botão2</button>
        <button onClick={this.handleClick3}>Botão3</button>
      </div>
    )
  }
}

export default App;
