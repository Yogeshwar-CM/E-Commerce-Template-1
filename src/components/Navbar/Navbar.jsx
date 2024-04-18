import React from "react";
import "./Navbar.css";
import logo from "../../assets/BRAND.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={logo} className="logo"></img>
      <ul>
        <li>About</li>
        <li>Offers</li>
        <li>Support</li>
      </ul>
      <div className="auth">
        Sign in
        <i class="fa-brands fa-google"></i>
      </div>
    </div>
  );
};

export default Navbar;
