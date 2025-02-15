import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "./TableBooking.css";

const TableBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
        toast.error("Please fill all fields!", { position: "top-center" });
      return;
    }

    toast.success("Table booked successfully!", { position: "top-center" });

    setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "" });
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center">Book a Table</h2>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                className="input-field"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          </Row><br/>
          <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                className="input-field"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row><br/>
        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                className="input-field"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row><br/>
        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                className="input-field"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row><br/>
        <Row>
          <Col md={12}>
          <Form.Group className="mb-3">
  <Form.Label>Time</Form.Label>
  <Form.Select
    name="time"
    value={formData.time}
    className="input-field"
    onChange={handleChange}
  >
    <option value="">Select a Time</option>
    {Array.from({ length: 12 }, (_, i) => {
      const hour = i + 9; // Time range from 9 AM to 8 PM
      const formattedHour = hour < 12 ? `${hour}:00 AM` : hour === 12 ? "12:00 PM" : `${hour - 12}:00 PM`;
      return (
        <option key={hour} value={`${hour}:00`}>
          {formattedHour}
        </option>
      );
    })}
  </Form.Select>
</Form.Group>

          </Col>
        </Row><br/>
        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label >Number of Guests</Form.Label>
              <Form.Control
                type="number"
                name="guests"
                min="1"
                value={formData.guests}
                className="input-field"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row><br/>
        <Button variant="primary" type="submit" className="submit-button"   >
          Book Table
        </Button>
      </Form>
    </Container>
  );
};

export default TableBooking;