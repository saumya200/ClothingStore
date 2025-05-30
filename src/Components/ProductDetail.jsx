import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Components/ProductDetail.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`).then((response) =>
      response
        .json()
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setLoading(false);
        })
    );
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }
  if (!product) {
    return <p>Product not found.</p>;
  }
  return (
    <div className="products--detail">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="products--image"
      />
      <div className="products--info">
        <h2>{product.title}</h2>
        <p className="products--price">
          <strong>Price:</strong> ${product.price}
        </p>
        <p className="products--description">
          <strong> Description:</strong>
          {product.description}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Rating:</strong>
          {product.rating}
        </p>
      </div>
      <Link to="/cart">
        <button className="buy--button" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </Link>
    </div>
  );
}

export default ProductDetail;
