import React from "react";
import "./_navbar.css";
import CartWidget from "./cartWidget/CartWidget";

function Navbar() {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="navbar-inner">
        <CartWidget />
        <p className="navbar-brand">eCommerce</p>
      </div>
      <ul className="nav navbar-nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
