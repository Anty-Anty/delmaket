import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClickProp}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
