import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const MainHeader = () => {
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <style>{`
        .nav-item-custom {
          position: relative;
          padding: 0.5rem 1rem;
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-item-custom::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background: white;
          transition: width 0.3s ease;
        }
        .nav-item-custom:hover::after,
        .nav-item-custom.active::after {
          width: 100%;
        }

        /* Styles pour le header fixe */
        .navbar-fixed {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <Navbar expand="lg" style={{ backgroundColor: "#1791c8" }} variant="dark" className="shadow py-3 navbar-fixed">
        <Container>
          <Navbar.Brand as={NavLink} to="/home" className="d-flex align-items-center fw-bold fs-4 text-white ">
            <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
            Parakou Vibes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-center">
              <NavLink to="/home" className={({ isActive }) => isActive ? "nav-item-custom active" : "nav-item-custom"}>
                Accueil
              </NavLink>
              <NavLink to="/places" className={({ isActive }) => isActive ? "nav-item-custom active" : "nav-item-custom"}>
                Places
              </NavLink>
              <NavLink to="/events" className={({ isActive }) => isActive ? "nav-item-custom active" : "nav-item-custom"}>
                Événements
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item-custom active" : "nav-item-custom"}>
                Contact
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item-custom active" : "nav-item-custom"}>
                À propos
              </NavLink>

              {/* {token ? ( */}
                <Button onClick={handleLogout} variant="dark" className="ms-3">
                  Déconnexion
                </Button>
              {/* ) : ( */}
                 {/* <NavLink to="/login" className={({ isActive }) => isActive ? "nav-item-custom active ms-3" : "nav-item-custom ms-3"}> */}
                    {/* Connexion */}
                 {/* </NavLink> */}
              {/* )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainHeader;