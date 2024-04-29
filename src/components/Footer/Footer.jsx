import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="left" id="main-l">
        <img src={logo} alt="logo" />
        <p>
          Website Built with ❤️ by{" "}
          <span id="ltp" onClick={() => {}}>
            Yogeshwar
          </span>
        </p>
      </div>
      <div className="right" id="main-r">
        <div className="left" id="left">
          <ul className="foot-nav">
            <li
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </li>
            <li>Offers</li>
            <li
              onClick={() => {
                navigate("/contact");
              }}
            >
              Support
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <i class="fa-brands fa-instagram"></i> Instagram
            </li>
            <li>
              <i className="fa-brands fa-youtube"></i> Youtube
            </li>
            <li>
              <i className="fa-brands fa-x-twitter"></i> X
            </li>
          </ul>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Footer;
