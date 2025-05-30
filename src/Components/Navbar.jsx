import React from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();
  const itemCount = cartItems.length;

  return (
    <nav className="navbar">
      <div className="navbar--logo">
        <Link to="/">Clothify</Link>
      </div>
      <ul className="navbar--links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">
            <FaShoppingCart />
            {itemCount > 0 && <span className="cart--count">{itemCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
