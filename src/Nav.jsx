import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./Inicio";
import Exercises from "./Exercises";

const Nav = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/exercises">Ejercicios</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Nav;
