import React from 'react';
import Respuesta from './respuesta';
const SalidaRespuesta = (props) => {
  return (
    <div className="screen">
      <Respuesta value={props.pregunta} />
      <Respuesta value={props.respuesta} />
    </div>
  )
}

export default SalidaRespuesta;
