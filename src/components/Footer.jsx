import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png"; // ajuste le chemin si besoin

function Footer() {
  return (
    <footer
      className="text-white pt-4 mt-5 fade-in-footer"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container">
        <div className="row align-items-center mb-3">
          {/* Logo + nom */}
          <div className="col-md-4 d-flex align-items-center">
            <img src={logo} alt="Logo" width="60" height="60" className="me-2" />
            <h5 className="mb-0">Parakou Vibe</h5>
          </div>

          {/* Navigation rapide */}
          <div className="col-md-4 text-center">
            <Link to="/home" className="text-white mx-2 text-decoration-none fw-bold">Accueil</Link>
            <Link to="/places" className="text-white mx-2 text-decoration-none fw-bold">Places</Link>
            <Link to="/events" className="text-white mx-2 text-decoration-none fw-bold">Événements</Link>
            <Link to="/contact" className="text-white mx-2 text-decoration-none fw-bold">Contact</Link>
            <Link to="/about" className="text-white mx-2 text-decoration-none fw-bold">À propos</Link>
          </div>

          {/* Réseaux sociaux */}
          <div className="col-md-4 text-end">
            <a href="#" className="text-white me-3"><FaFacebook size={20} /></a>
            <a href="#" className="text-white me-3"><FaInstagram size={20} /></a>
            <a href="#" className="text-white"><FaTwitter size={20} /></a>
          </div>
        </div>

        <div className="text-center pb-3">
          <small>&copy; {new Date().getFullYear()} Parakou Vibe. Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;