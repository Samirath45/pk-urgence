// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Assurez-vous d'importer bootstrap
import logo from "../assets/logo.png"; // Remplacez par le chemin correct de votre logo

function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo et texte */}
        <div className="d-flex align-items-center">
            <img
              src={logo} // Chemin du logo correctement défini
              alt="Parakou Vibe Logo"
              style={{ height: "60px", width: "auto" }}
              className="me-2"
            />
          <h1 className="m-0">Parakou Vibe</h1>
        </div>

        {/* Liens de connexion et inscription */}
        <div>
          <Link to="/inscription" className="btn btn-light me-2">
            Inscription
          </Link>
          <Link to="/connexion" className="btn btn-outline-light">
            Connexion
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;