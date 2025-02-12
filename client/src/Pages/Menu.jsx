import React from "react";
import { Carousel, Button, Card } from "react-bootstrap";
import iceCreams from "./data";;
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Menu.css";

const Menu = ({ addToCart }) => {
    const handleAddToCart = (item) => {
      addToCart(item);
      toast.success(`${item.name} added to cart! 🍦`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    };

  return (
    <div className="menu-container">
      {/* Carousel Section */}
      <Carousel className="menu-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src="/caro-1.png" alt="Offer 1" />
          <Carousel.Caption>
            <h3 className="offer"> Special Winter Offer! ❄️</h3>
            <h4 className="offer">Buy 2 Get 1 Free on all flavors!</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/caro-2.png" alt="Offer 2" />
          <Carousel.Caption>
            <h3 className="offer">New Year Special! 🎉</h3>
            <h4 className="offer">20% Off on Orders Above ₹300</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/caro-3.png" alt="Offer 3" />
          <Carousel.Caption>
            <h3 className="offer">Melty Magic 🍦</h3>
            <h4 className="offer">Premium handcrafted ice creams made with love.</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Ice Cream Grid */}
      <h2 className="menu-title">Our Special Ice Creams 🍨</h2>
      <div className="ice-cream-grid">
        {iceCreams.map((item) => (
          <Card key={item.id} className="ice-cream-card">
            <Card.Img variant="top" src={item.image} className="ice-cream-img" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <h5>{item.price}</h5>
              <Button variant="primary" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Menu;
