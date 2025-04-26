// src/components/ReviewForm.jsx
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

// Fonction pour générer les étoiles colorées
const StarRating = ({ rating, setRating }) => {
  const handleClick = (index) => {
    setRating(index + 1);  // Mettre à jour la note au clic sur une étoile
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`bi bi-star${index < rating ? "-fill" : ""}`}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: index < rating ? "#ffd700" : "#d3d3d3",  // Colorier seulement les étoiles cliquées
          }}
          onClick={() => handleClick(index)}  // Lors du clic, on met à jour la note
        />
      ))}
    </div>
  );
};

const ReviewForm = ({ eventId, placeId, onAddReview }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);  // Initialement, aucune étoile n'est sélectionnée

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment || rating === 0) return;  // Si aucun commentaire ou note n'est sélectionnée

    const newReview = {
      id: Date.now(),
      text: comment,
      rating: parseInt(rating),
      user: "Utilisateur connecté", // Remplacer par l'utilisateur réel
    };

    onAddReview(eventId || placeId, newReview);
    setComment("");
    setRating(0);  // Réinitialiser la note après soumission
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group controlId="ratingSelect" className="mb-2">
        <Form.Label>Note</Form.Label>
        <StarRating rating={rating} setRating={setRating} />
      </Form.Group>

      <Form.Group controlId="commentInput" className="mb-2">
        <Form.Label>Commentaire</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Donnez votre avis..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
  );
};

export default ReviewForm;