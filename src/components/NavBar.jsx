import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">
        Mi{" "}
        <span className="logo-highlight">
          CROA
        </span>
      </div>

      <ul className="nav-links">
        <li><a href="/" className="nav-item">Inicio</a></li>
        <li><a href="#servicios" className="nav-item">Servicios</a></li>
        <li><a href="#nosotros" className="nav-item">Nosotros</a></li>
        <li><a href="#portfolio" className="nav-item">Portfolio</a></li>
        <li><a href="#contacto" className="nav-item">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
