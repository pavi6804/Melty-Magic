import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import iceCreams from "./data";
import "./Menu.css";
import "./Carousel.css"; // New file for carousel styles

const Menu = ({ addToCart }) => {
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: quantities[item.id] || 1 });
    toast.success(`${item.name} added to cart! 🍦`, {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="menu-container">
  {/* Custom Animated Carousel */}
  <div className="carousel-container">
    <div className="product-card">
      <img src="https://i.pinimg.com/474x/c0/56/e0/c056e0170a90ef3d1f2138c19146335e.jpg" alt="Offer 1" />
    </div>
    <div className="product-card">
      <img src="https://i.pinimg.com/736x/1c/fc/3e/1cfc3e39dec65041d05b8d66ec22ae6f.jpg" alt="Offer 2" />
    </div>
    <div className="product-card">
      <img src="https://i.pinimg.com/474x/41/27/02/4127023ca5b27208054096b2ed83f7bf.jpg" alt="Offer 3" />
    </div>
    <div className="product-card">
      <img src="https://i.pinimg.com/474x/76/7e/81/767e81fd5ef1fa707b8872949af97a22.jpg" alt="Offer 4" />
    </div>
    <div className="product-card">
      <img src="https://i.pinimg.com/474x/3a/da/0c/3ada0c9e3c7656c5093039af6db0d2d9.jpg" alt="Offer 5" />
    </div>
</div>


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

                <div className="small-quantity-controls">
                  <button className="qty-btn-g" onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>
                  <span className="qty-text">{quantities[item.id] || 1}</span>
                  <button className="qty-btn-r" onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>

                <Button
                  variant="primary"
                  className="add-to-cart"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      </>
  );
};

export default Menu;
