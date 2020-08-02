import React from 'react';
import './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = props => {
  return (
    <div className='Burger'>
      <Ingredient type='bread-top' />
      <Ingredient type='salad' />
      <Ingredient type='bacon' />
      <Ingredient type='cheese' />
      <Ingredient type='meat' />
      <Ingredient type='salad' />
      <Ingredient type='bread-bottom' />
    </div>
  )
};

export default Burger;
