import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Si l'utilisateur est déjà connecté, on le redirige
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://parakou-vibe.onrender.com/api/users/login", {
        email,
        password,
      });

      console.log("Connexion réussie :", response.data);

      // Stocker le token dans le localStorage
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      alert("Connexion réussie !");
      navigate("/home");
    } catch (error) {
      console.error("Erreur de connexion :", error.response?.data || error.message);
      alert("Email ou mot de passe incorrect !");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4" style={{ color: "#1791c8" }}>
                Connexion
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    Se connecter
                  </button>
                </div>
              </form>
              <p className="mt-3 text-center">
                Pas encore inscrit ? <Link to="/register">Inscris-toi ici</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;