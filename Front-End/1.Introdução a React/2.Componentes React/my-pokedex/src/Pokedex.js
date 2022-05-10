import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const pokemonArray = this.props.pokemonArray
    return(
      <div className='pokedex'>
        { pokemonArray.map((pokemonObject) => {
          return <Pokemon pokemon={ pokemonObject } />
        }) }
      </div>
    )
  }
}

export default Pokedex