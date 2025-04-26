import React, { useState, useEffect } from "react";

const images = [
  "https://tourisme.parakou.bj/wp-content/uploads/2024/01/DJI_0315-1024x576.jpg",
  "https://tourisme.parakou.bj/wp-content/uploads/2024/01/BKM_1715-1024x683.jpg",
  "https://tourisme.parakou.bj/wp-content/uploads/2024/01/DJI_0133-1024x576.jpg",
  "https://tourisme.parakou.bj/wp-content/uploads/2023/12/BKM_1752-768x1152.jpg",
  "https://tourisme.parakou.bj/wp-content/uploads/2024/02/BKM_1639-1024x683.jpg",
];

const MainHome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    height: "110vh",
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    transition: "background-image 1s ease-in-out",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    color: "white",
    textAlign: "center",
    top: "50%",
    transform: "translateY(-50%)",
  };

  return (
    <>
      <div style={backgroundStyle}>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
          <h1 style={{ fontSize: "5rem", fontWeight: "bold", textShadow: "2px 2px #1791c8",  }}>
            Bienvenue sur Parakou Vibe !
          </h1>
          <p style={{ fontSize: "2rem", textShadow: "1px 1px #000" }}>
            Découvrez les lieux tendances et événements de votre ville.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row g-4 align-items-stretch">
          {/* Texte */}
          <div className="col-md-6 d-flex">
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                width: "100%",
              }}
              className="d-flex flex-column justify-content-center"
            >
              <h2 className="fw-bold mb-3 text-info">Parakou, la cité des échanges</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
                Située au nord du Bénin, Parakou est une ville dynamique réputée pour son rôle clé dans le commerce et la culture.
                Carrefour stratégique entre le sud et le nord du pays, elle regorge de lieux animés, de marchés typiques,
                de traditions vivaces et d’événements culturels tout au long de l’année. Parakou Vibe met en lumière cette
                richesse et vous guide vers les meilleurs endroits à découvrir. Laissez-vous emporter par son énergie unique!
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-6 d-flex">
            <img
              src="https://www.researchgate.net/publication/348672676/figure/fig1/AS:982596372688897@1611280639294/Carte-de-situation-de-la-ville-de-Parakou.png"
              alt="Parakou sur la carte du Bénin"
              className="img-fluid rounded w-100"
              style={{
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;