import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import "../Components/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      }, []);
  });
  return (
    <div className="products">
      <h2>Our Collections</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products--grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
