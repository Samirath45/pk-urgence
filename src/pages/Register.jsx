
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Si un token existe déjà, rediriger l'utilisateur
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(
        "https://parakou-vibe.onrender.com/api/users/register",
        formData
      );
      console.log("Données envoyées :", formData);


      console.log("Inscription réussie :", response.data);
      alert("Inscription réussie !");

      // Stocker le token dans localStorage
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      // Rediriger vers la page principale
      navigate("/home");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error.response?.data || error.message);
      alert("Erreur lors de l'inscription !");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4" style={{ color: "#1791c8" }}>
                Crée ton compte
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Nom d'utilisateur</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      backgroundColor: "#1791c8",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    S'inscrire
                  </button>
                </div>
              </form>
              <p className="mt-3 text-center">
                Déjà inscrit ? <a href="/login">Connecte-toi</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;