import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = props => (
  <div className='BuildControls'>
    { controls.map(control => (
      <BuildControl 
        key={ control.label } 
        label={ control.label} 
        plusClicked={ () => props.plusClicked(control.type) }
        minusClicked={ () => props.ingredientRemoved(control.type) }/>
    )) }
  </div>
);

export default BuildControls;
