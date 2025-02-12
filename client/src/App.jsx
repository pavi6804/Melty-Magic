import React, { useState} from "react";
import Menu from "./Pages/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify"; 

  const App = () => {
    const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]); 
  };

  return (
    <>
      <Menu addToCart={addToCart} />
      <ToastContainer />
    </>
  );
}

export default App;
