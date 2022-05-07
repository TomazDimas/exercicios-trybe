import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon
    return(
      <div className='pokemon'>
        <p className='pokemonName'>{ name }</p>
        <p className='pokemonType'>{ type }</p>
        <p className='averageWeight'>{ averageWeight.value }{ averageWeight.measurementUnit }</p>
        <img src={image}/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.object,
  image: PropTypes.string,
};

export default Pokemon