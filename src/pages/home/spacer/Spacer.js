import React from 'react';
import './Spacer.css';

function Spacer(props) {
  return (
    <div className={`spacer-container ${props.name}`}>
      <div>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}

export default Spacer;