import React from "react";
import "./Foot.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mi CROA. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#politicas">Política de privacidad</a>
          <a href="#terminos">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
