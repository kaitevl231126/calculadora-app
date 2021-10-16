import React from 'react';
const Boton = (props) => {
    return (
      <input
        type="button"
        value={props.label}
        onClick={props.handleClick}
      />
    );
  }
    
  export default Boton;
  