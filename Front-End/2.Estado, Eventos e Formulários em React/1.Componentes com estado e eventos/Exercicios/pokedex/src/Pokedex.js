import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {

    state = {
      index: 0,
      filter: '',
    }

    handleClick = () => {
      this.setState((estadoAnterior, _props) => ({
        index: (estadoAnterior.index + 1),
      }))
    }

    handleType = (event) => {
      this.setState({
        filter: event.target.id,
      })
    }

    render() {
      const {index, filter} = this.state
      const filteredArray = this.props.pokemons.filter((pokemon) => pokemon.type.includes(filter))
      const mapedArray = filteredArray.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
        return (
            <div className="pokedex">
                <div className="divPokemons">
                {mapedArray[index % filteredArray.length]}
                </div>
                <div className="divBotao">
                  <button onClick={this.handleClick}>Próximo</button>
                  <button onClick={this.handleType} id="Fire">Fire</button>
                  <button onClick={this.handleType} id="Psychic">Psychic</button>
                  <button onClick={this.handleType} id="">All</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;