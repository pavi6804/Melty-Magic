import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import "./Order.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = ({ cart: initialCart }) => {
  const [cart, setCart] = useState(initialCart); // Store cart in state

  const updateQuantity = (index, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item, i) =>
          i === index ? { ...item, quantity: (item.quantity || 1) + change } : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  const calculateTotal = () => {
    if (!cart || cart.length === 0) return 0;

    return cart.reduce((total, item) => {
      const price = item?.price ? parseFloat(item.price.replace("₹", "")) : 0;
      return total + price * (item.quantity || 1);
    }, 0);
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("❌ Your cart is empty!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    toast.success("🎉 Order placed successfully!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <div className="order-container">
      {/* Left Side: Order Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>

        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Item Name</th>
                <th>No. of Items</th>
                <th>Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <div className="quantity-control">
                      <button
                        className="qty-btn-g"
                        onClick={() => updateQuantity(index, -1)}
                      >
                        -
                      </button>
                      <span className="qty-text">{item.quantity || 1}</span>
                      <button
                        className="qty-btn-r"
                        onClick={() => updateQuantity(index, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    ₹
                    {(
                      parseFloat(item.price.replace("₹", "")) *
                      (item.quantity || 1)
                    ).toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="text-end">
                  <strong>Grand Total</strong>
                </td>
                <td>
                  <strong>₹{calculateTotal().toFixed(2)}</strong>
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>

      {/* Right Side: Customer Details */}
      <div className="customer-details">
        <h2>Customer Details</h2>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <br />
            <Form.Control
              className="input-field"
              type="text"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Phone No.</Form.Label>
            <br />
            <Form.Control
              className="input-field"
              type="tel"
              placeholder="Enter phone number"
              required
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <br />
            <Form.Control
              className="input-field"
              as="textarea"
              rows={3}
              placeholder="Enter your address"
              required
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Pincode</Form.Label>
            <br />
            <Form.Control
              className="input-field"
              type="number"
              placeholder="Enter pincode"
              required
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Payment Method</Form.Label>
            <br />
            <Form.Control
              className="input-field"
              type="text"
              value="Cash on Delivery"
              disabled
            />
          </Form.Group>
          <br />
          <Button
            variant="success"
            className="place-order-btn"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Order;
