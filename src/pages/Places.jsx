// src/components/Places.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState({}); // { placeId: [avis...] }

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("https://parakou-vibe.onrender.com/api/places");
        setPlaces(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des places :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const res = await axios.get("https://parakou-vibe.onrender.com/api/avis");
        const reviewsByPlace = {};
        res.data.forEach((review) => {
          if (review.lieu) {
            if (!reviewsByPlace[review.lieu]) {
              reviewsByPlace[review.lieu] = [];
            }
            reviewsByPlace[review.lieu].push(review);
          }
        });
        setReviews(reviewsByPlace);
      } catch (error) {
        console.error("Erreur lors du chargement des avis :", error);
      }
    };

    fetchAllReviews();
  }, []);

  const handleAddReview = async (placeId, newReview) => {
    try {
      const res = await axios.post("https://parakou-vibe.onrender.com/api/avis", {
        lieu: placeId,
        commentaire: newReview.commentaire,
        note: newReview.note,
        utilisateur: newReview.utilisateur || "661f9f01382fd88a040b3dd4", // à remplacer par le vrai userId connecté
      });

      const savedReview = res.data;
      setReviews((prev) => ({
        ...prev,
        [placeId]: [...(prev[placeId] || []), savedReview],
      }));
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'avis :", error);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4" style={{ color: "#1791c8",  marginTop:"10%" }}>Nos Places</h1>

      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
          <p>Chargement des places...</p>
        </div>
      ) : (
        <Row>
          {places.map((place, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={place.image || "https://via.placeholder.com/300"}
                  alt={place.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "#1791c8" }}>{place.name}</Card.Title>
                  <Card.Text>{place.description}</Card.Text>

                  <ReviewForm placeId={place._id} onAddReview={handleAddReview} />
                  <ReviewList reviews={reviews[place._id] || []} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Places;