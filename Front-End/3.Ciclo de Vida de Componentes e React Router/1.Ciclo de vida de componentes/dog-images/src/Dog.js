import './App.css';
import React from 'react';

class Dog extends React.Component {
  state = {
    loading: true,
    dogList: [],
    dogObject: undefined
  }

  async fetchDog() {
    this.setState(
      {loading: true},
      async () => {
        const dogRequest = await fetch('https://dog.ceo/api/breeds/image/random');
        const jsonDog = await dogRequest.json();
        this.setState({
          dogObject: jsonDog,
          loading: false,
        })
      }
    )
  }

  componentDidMount() {
    console.log('oi');
    this.fetchDog();
  }

  saveDog = () => {
    this.setState(({dogList, dogObject}) => ({
      dogList: [...dogList, dogObject ]
    }))
    this.fetchDog()
  }

  renderDog = () => {
    return (
      <div>
        <div>
          <img src={this.state.dogObject.message} id={this.state.dogObject.message} alt='Dog'></img>
        </div>
        <button onClick={this.saveDog}>Mais 1</button>
      </div>
    )
  }

  render() {
    const {dogObject, dogList, loading} = this.state

    return (
      <div className='App'>
        <h1>Cachorros</h1>
        {dogList.map((dog) => <img id={dog.message} src={dog.message} alt='Dog'></img>)}
        {!loading ? this.renderDog() : 'LOADING...'}
      </div>
    )
  }
}

export default Dog;
