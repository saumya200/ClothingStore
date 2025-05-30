import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "../Components/Cart.css";

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.Length === 0 ? (
        <p className="cart--empty">No items in cart.</p>
      ) : (
        <ul className="cart--item">
          {cartItems.map((item) => (
            <li key={item.id} className="cart--list">
              <img src={item.thumbnail} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
