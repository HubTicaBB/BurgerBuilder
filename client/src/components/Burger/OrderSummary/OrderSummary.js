import React from 'react';
import Auxx from '../../../hoc/Auxx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister } from '@fortawesome/free-solid-svg-icons';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey => 
      <li key={ ingredientKey }>
        <span style={{ textTransform: 'capitalize' }}>{ ingredientKey }:</span>&nbsp; 
        { props.ingredients[ingredientKey] }
      </li>
    );

  return (
    <Auxx>
      <div className='modal'>
        <div className="modal-dialog" role="dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Your Order</h5>
            </div>
            <div className="modal-body">
              <p>A delicious burger with the following ingredients:</p>
              <ul>
                { ingredientSummary }
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={ faCashRegister } />&nbsp;&nbsp;
                Continue to Checkout
              </button>
              <button type="button" className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Auxx>
  )
};

export default OrderSummary;
