import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./Contact.css"; // Custom styles

const Contact = () => {
  return (
    <Container className="py-5 contact-container">
      <Row className="align-items-center">
        <Col md={6}>
          <h2 className="mb-3 text-center">📞 Contact Us</h2>
          <Card className="shadow-sm p-4 contact-card">
            <Card.Body>
              <p>📍 <strong>Location:</strong> 123 Sweet Treats Avenue, Dessert City, CA 90210</p>
              <p>📞 <strong>Phone:</strong> +1 (555) 123-4567</p>
              <p>📩 <strong>Email:</strong> support@meltymagic.com</p>
              <p>🌐 <strong>Website:</strong> <a href="https://www.meltymagic.com" target="_blank" rel="noopener noreferrer">www.meltymagic.com</a></p>
              <p>🕒 <strong>Hours:</strong> Mon-Sun: 10 AM - 10 PM</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
