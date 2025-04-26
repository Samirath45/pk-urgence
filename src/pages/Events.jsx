// src/components/Events.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [reviews, setReviews] = useState({}); // { eventId: [avis, ...] }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("https://parakou-vibe.onrender.com/api/events");
        setEvents(res.data);
      } catch (error) {
        console.error("Erreur lors du chargement des événements :", error);
      }
    };

    fetchEvents();
  }, []);

  const handleAddReview = (eventId, newReview) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [eventId]: [...(prevReviews[eventId] || []), newReview],
    }));
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4" style={{ color: "#1791c8", marginTop:"10%" }}>
        Nos Événements
      </h1>
      <Row>
        {events.map((event, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={event.image}
                alt={event.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#1791c8" }}>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>

                {/* Calcul moyenne des avis */}
                {reviews[event._id] && reviews[event._id].length > 0 && (
                  <div className="mb-2">
                    <strong>Note moyenne : </strong>
                    {(() => {
                      const notes = reviews[event._id].map((r) => r.note);
                      const average = notes.reduce((a, b) => a + b, 0) / notes.length;
                      const rounded = Math.round(average * 10) / 10;
                      const fullStars = Math.floor(rounded);
                      const halfStar = rounded - fullStars >= 0.5;

                      return (
                        <span style={{ color: "#fbc02d" }}>
                          {[...Array(fullStars)].map((_, i) => (
                            <i className="bi bi-star-fill" key={i}></i>
                          ))}
                          {halfStar && <i className="bi bi-star-half"></i>}
                          {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
                            <i className="bi bi-star" key={i}></i>
                          ))}{" "}
                          <small className="text-muted">({rounded}/5)</small>
                        </span>
                      );
                    })()}
                  </div>
                )}

                <ReviewForm eventId={event._id} onAddReview={handleAddReview} />
                <ReviewList reviews={reviews[event._id] || []} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;