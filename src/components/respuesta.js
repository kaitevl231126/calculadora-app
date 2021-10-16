import React from 'react';
const Respuesta = (props) => {
  return (
    <div className="screen-row">
      <input type="text" readOnly value={props.value} />
    </div>
  )
}
export default Respuesta;
