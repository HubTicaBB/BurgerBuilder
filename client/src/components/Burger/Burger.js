import React from 'react';
import './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, i) =>
      <Ingredient key={ ingredientKey + i } type={ ingredientKey } />
    );
  });

  return (
    <div className='Burger'>
      <Ingredient type='bread-top' />
      { transformedIngredients }
      <Ingredient type='bread-bottom' />
    </div>
  )
};

export default Burger;
