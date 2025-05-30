import React from "react";
import "../Components/Products.jsx";
import "../Components/ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product--card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product--image"
        />
        <div className="product--info">
          <h3>{product.title}</h3>
          <p>$ {product.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
