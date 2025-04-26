// src/pages/Landing.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Si un token existe, rediriger vers /home
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div>
      

      {/* Section Accroche avec image de fond */}
      <section
        className="text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "110vh",
          backgroundImage:
            "url('https://tourisme.parakou.bj/wp-content/uploads/2024/01/DJI_0279-768x432.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 20px",
        }}
      >
        <div className="container">
          <h1
            className="display-3 fw-bold"
            style={{ color: "#1791c8", textShadow: "2px 2px 4px #000" }}
          >
            Bienvenue sur Parakou Vibe
          </h1>
          <h2
            className="lead mt-3 fs-4"
            style={{ color: "white", textShadow: "2px 2px 2px #000" }}
          >
            Découvre les événements, bons plans et lieux incontournables de ta ville !
          </h2>
        </div>
      </section>

      {/* Section boutons bas */}
      <section className="py-5 text-center bg-light">
        <div>
          <h4 className="mb-4">Rejoingnez-nous et vivez la vibe 🔥</h4>
          <Link
            to="/register"
            className="btn btn-primary me-3"
            style={{ backgroundColor: "#1791c8", borderColor: "#1791c8" }}
          >
            Inscription
          </Link>
          <Link to="/login" className="btn btn-outline-dark">
            Connexion
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;