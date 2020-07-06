import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="menu">
        <img className="account-button" src="./img/accout-icon.svg"></img>
        <Link to="/cart">
        <img className="cart-button" src="./img/cart-icon.svg"></img>
    </Link>
    </div>
  );
};

export default Home;
