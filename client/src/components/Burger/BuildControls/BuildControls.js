import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = props => (
  <div className='BuildControls'>
    <h3 className='m-4 text-danger'>Currrent Price: 
      <span className='badge badge-pill badge-outline-primary border border-danger ml-3 p-3'>
        <FontAwesomeIcon icon={ faDollarSign } />&nbsp;&nbsp;
        { props.totalPrice.toFixed(2) }
      </span>
    </h3>
    { controls.map(control => (
      <BuildControl 
        key={ control.label } 
        label={ control.label} 
        plusClicked={ () => props.plusClicked(control.type) }
        minusClicked={ () => props.minusClicked(control.type) }
        disabled={ props.disabled[control.type] }/>
    )) }
    <button type="button" class="btn btn-primary m-5" disabled={ !props.purchasable }>
      <FontAwesomeIcon icon={ faShoppingCart }/>&nbsp;&nbsp;Go to Payment</button>
  </div>
);

export default BuildControls;
