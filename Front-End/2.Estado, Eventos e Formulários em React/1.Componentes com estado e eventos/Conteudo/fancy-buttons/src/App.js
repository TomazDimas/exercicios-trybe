import './App.css';
import React from 'react';

class App extends React.Component {
  render() {

    function handleClick() {
      console.log('oi');
    }

    return(
      <div>
        <button onClick={handleClick}>Botão</button>
      </div>
    )
  }
}

export default App;
