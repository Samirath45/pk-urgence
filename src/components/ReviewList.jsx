// src/components/ReviewList.jsx
import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./ReviewList.css"; // pour personnaliser les étoiles si nécessaire

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`bi bi-star${index < rating ? "-fill" : ""}`}
          style={{
            fontSize: "20px",
            color: index < rating ? "#ffd700" : "#d3d3d3",
          }}
        />
      ))}
    </div>
  );
};

const ReviewList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>Aucun avis pour le moment.</p>;
  }

  return (
    <ListGroup className="mt-3">
      {reviews.map((review) => (
        <ListGroupItem key={review.id} className="mb-3 p-3 shadow-sm">
          <div>
            <strong>Utilisateur {review.user}</strong>
          </div>
          <StarRating rating={review.rating} />
          <p>{review.text}</p>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default ReviewList;