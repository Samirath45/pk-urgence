// src/components/Header.jsx
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Assure-toi que le logo est bien là
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#1791c8" }}
      variant="dark"
      className="shadow"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-top me-2"
          />
          <span style={{ fontWeight: "bold", fontSize: "24px" }}>
            Parakou Vibe
          </span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/register" className="text-white fw-bold">
            Inscription
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="text-white fw-bold">
            Connexion
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;