import React, { useState } from "react";
/* import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"; */
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";

const Exercises = () => {
  const [ejercicio, setEjercicio] = useState(null);
  return (
    <>
      <h2 className="text-center">pagina de Ejercicios</h2>
      <div className="d-flex justify-content-around my-5">
        <ol>
          <li onClick={() => setEjercicio(<Exercise3 />)}>Patos</li>
          <li onClick={() => setEjercicio(<Exercise1 />)}>Contador</li>
          <li onClick={() => setEjercicio(<Exercise2 />)}>
            Directorio telefonico
          </li>
        </ol>
      </div>
      <div>{ejercicio}</div>
    </>
  );
};

export default Exercises;
/* 
selecionar opcion ejericio 2 */
