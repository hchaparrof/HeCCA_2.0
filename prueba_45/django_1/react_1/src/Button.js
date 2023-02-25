import React, { useState } from 'react';
import axios from 'axios';

function Button() {
  const [resultado, setResultado] = useState(null);

  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:8000/mi_ruta/');
      setResultado(response.data.resultado);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Ejecutar función</button>
        {resultado ? <p>El resultado es: {resultado}</p> : <p>Probando...</p>}
    </div>
  );
}

export default Button;