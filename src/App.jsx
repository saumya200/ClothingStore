import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
// import ProductCard from "./Components/ProductCard";
import Home from "./Components/Home";
import ProductDetail from "./Components/ProductDetail";
import Products from "./Components/Products";
import { CartProvider } from "./context/CartContext";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
