import React from 'react';
import './BackDrop.css';

const BackDrop = props => {
  
  return (
    <div className="backDrop" onClick={() => props.closeBackDrop(false)}>
    </div>
  )
}

export default BackDrop;