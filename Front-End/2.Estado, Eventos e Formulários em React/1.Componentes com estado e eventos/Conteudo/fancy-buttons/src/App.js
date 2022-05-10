import './App.css';
import React from 'react';

class App extends React.Component {
  
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

  handleClick1() {
    console.log('oi');
    console.log(this);
  }


  handleClick2() {
    console.log('olá');
    console.log(this);
  }


  handleClick3 = () => {
    console.log('tudo bom?');
    console.log(this);
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
