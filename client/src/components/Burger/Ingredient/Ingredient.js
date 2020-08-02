import React, { Component } from 'react';
import './Ingredient.css';
import PropTypes from 'prop-types';

class Ingredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className='BreadBottom'>&nbsp;</div>;
        break;
      case ('bread-top'):
        ingredient = (<div className='BreadTop'>&nbsp;
                        <div className='Seeds1'>&nbsp;</div>
                        <div className='Seeds2'>&nbsp;</div>
                      </div>);
        break;
      case ('meat'):
        ingredient = <div className='Meat'>&nbsp;</div>;
        break;
      case ('cheese'):
        ingredient = <div className='Cheese'>&nbsp;</div>;
        break;
      case ('salad'):
        ingredient = <div className='Salad'>&nbsp;</div>;
        break;
      case ('bacon'):
        ingredient = <div className='Bacon'>&nbsp;</div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  };  
};

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default Ingredient;
