import React, { useEffect, useState } from "react";

const Exercise1 = () => {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (contador > 0) setColor("text-primary");
    if (contador < 0) setColor("text-danger");
    if (contador === 0) setColor("text-success");
  }, [contador]);

  return (
    <div className="text-center">
      <p>
        has hecho click <span className={`${color}`}>{contador}</span> veces
      </p>
      <button
        className="mx-1 btn btn-primary"
        onClick={() => setContador(contador + 1)}
      >
        +
      </button>
      <button className="mx-1 btn btn-primary" onClick={() => setContador(0)}>
        Resetear
      </button>
      <button
        className="mx-1 btn btn-primary"
        onClick={() => setContador(contador - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Exercise1;
//boton que al hacer click llame una api
