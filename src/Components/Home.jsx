import React from "react";
import { Link } from "react-router-dom";
import "../Components/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero--section">
        <h1 className="home--title">Welcome to Clothify !</h1>
        <p className="home--description">
          Lorem ipsum donor lorem ipsum donor lorem ipsum donor lorem ipsum
          donor
        </p>
        <Link to="/products" className="shop--button">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
