import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/BRAND.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar">
      <img src={logo} className="logo" alt="Logo"></img>
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? (
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
        ) : (
          <i className="fa-solid fa-close" onClick={toggleMenu}></i>
        )}
      </div>
      <div className="menu main">
        <ul>
          <li>About</li>
          <li>Offers</li>
          <li>Support</li>
        </ul>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>About</li>
          <li>Offers</li>
          <li>Support</li>
        </ul>
        <div className="auth2">
          Sign in
          <i className="fa-brands fa-google"></i>
        </div>
      </div>
      <div className="auth">
        Sign in
        <i className="fa-brands fa-google"></i>
      </div>
    </div>
  );
};

export default Navbar;
