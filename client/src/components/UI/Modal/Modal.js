import React from 'react';
import '../../../bootstrap.css';

const Modal = props => (
  <div 
    style={{ 
      display: props.show ? 'block' : 'none'
     }}>
      { props.children }
  </div>
);

export default Modal;