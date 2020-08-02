import React from 'react';
import '../../../../bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const BuildControl = props => (
  <div className="btn-group mb-2">
    <button className='btn btn-success'
      onClick={ props.minusClicked }>
      <FontAwesomeIcon icon={ faMinus } />
    </button>  
    <button className='btn btn-secondary' style={{ minWidth: '100px' }}>
      { props.label }
    </button>  
    <button className='btn btn-danger'
      onClick={ props.plusClicked }>
      <FontAwesomeIcon icon={ faPlus } />
    </button>
  </div>  
);

export default BuildControl;
