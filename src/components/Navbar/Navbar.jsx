import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/BRAND.svg";
import { signInWithGoogle } from "../../firebaseConfig";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOut, setUser } = useContext(AuthContext); // Destructure user and signOut from AuthContext
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  console.log(user ? "True" : "False"); // Log the user object to check its value

  return (
    <div className="Navbar">
      <img src={logo} className="logo" alt="Logo" />
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? (
          <i className="fa-solid fa-close" onClick={toggleMenu}></i>
        ) : (
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
        )}
      </div>
      <div className="main">
        <ul>
          <li>About</li>
          <li>Offers</li>
          <li>Support</li>
        </ul>
      </div>
      <div className={`${menuOpen ? "menu" : "menu-closed"}`}>
        <ul>
          <li>About</li>
          <li>Offers</li>
          <li>Support</li>
        </ul>
        {user ? (
          <div className="auth" onClick={signOut}>
            <img src={user.photoURL} alt="Profile" className="profile-pic" />
            <span>{user.displayName}</span>
          </div>
        ) : (
          <div
            className="auth"
            onClick={() => {
              signInWithGoogle(setUser);
            }}
          >
            Sign in
            <i className="fa-brands fa-google"></i>
          </div>
        )}
      </div>
      {user ? (
        <div className="auth" onClick={signOut}>
          <img src={user.photoURL} alt="Profile" className="profile-pic" />
          <span>{user.displayName}</span>
        </div>
      ) : (
        <div
          className="auth"
          onClick={() => {
            signInWithGoogle(setUser);
          }}
        >
          Sign in
          <i className="fa-brands fa-google"></i>
        </div>
      )}
    </div>
  );
};

export default Navbar;
