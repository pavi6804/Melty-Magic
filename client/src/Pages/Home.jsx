import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <>

      <Container className="home-container">
        <h1>Welcome to Melty Magic</h1>
        <p>Your favorite place for delicious ice cream and treats!</p>
        <Link to="/menu">
        <Button className="menu-button">Explore Menu</Button>
      </Link>
      </Container>
    </>
  );
};

export default Home;
