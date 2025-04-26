

// src/components/Contact.jsx
import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: false, message: "", variant: "" });

    try {
      await axios.post("https://parakou-vibe.onrender.com/api/messages", formData);
      setAlert({ show: true, message: "Message envoyé avec succès !", variant: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      setAlert({ show: true, message: "Échec de l'envoi du message.", variant: "danger" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: "#1791c8", fontWeight: "bold",  marginTop:"10%" }}>
        Contactez-nous
      </h2>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          {alert.show && (
            <Alert variant={alert.variant} onClose={() => setAlert({ ...alert, show: false })} dismissible>
              {alert.message}
            </Alert>
          )}

          <Form onSubmit={handleSubmit} className="p-4 rounded shadow-sm bg-light">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label><FaUser className="me-2" />Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Entrez votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label><FaEnvelope className="me-2" />Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Entrez votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label><FaCommentDots className="me-2" />Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="w-100"
              style={{ backgroundColor: "#1791c8", border: "none" }}
              disabled={loading}
            >
              {loading ? <Spinner animation="border" size="sm" /> : "Envoyer"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;