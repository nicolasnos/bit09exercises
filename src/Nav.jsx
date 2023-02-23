import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import Inicio from "./Inicio";
import Exercises from "./Exercises";

const Nav = () => {
  return (
    <BrowserRouter>
      <nav className="py-4 text-center">
        <Link className="px-4" to="/">
          Inicio
        </Link>
        <FaBeer />
        <Link className="px-4" to="/exercises">
          Ejercicios
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Nav;
