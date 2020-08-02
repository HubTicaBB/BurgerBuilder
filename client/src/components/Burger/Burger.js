import React from 'react';
import './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => [...Array(props.ingredients[ingredientKey])]
      .map((_, i) => <Ingredient key={ ingredientKey + i } type={ ingredientKey } />)
    )
    .reduce((array, element) => array.concat(element), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className='Burger'>
      <Ingredient type='bread-top' />
      { transformedIngredients }
      <Ingredient type='bread-bottom' />
    </div>
  )
};

export default Burger;
