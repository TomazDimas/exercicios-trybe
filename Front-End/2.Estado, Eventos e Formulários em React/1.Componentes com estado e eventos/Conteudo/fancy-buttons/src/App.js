import './App.css';
import React from 'react';

class App extends React.Component {
  render() {

    function handleClick1() {
      console.log('oi');
    }


    function handleClick2() {
      console.log('olá');
    }


    function handleClick3() {
      console.log('tudo bom?');
    }

    return(
      <div>
        <button onClick={handleClick1}>Botão1</button>
        <button onClick={handleClick2}>Botão2</button>
        <button onClick={handleClick3}>Botão3</button>
      </div>
    )
  }
}

export default App;
