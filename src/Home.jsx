import React, { useState, useEffect } from "react";
import "./Home.css";
import cap from "./assets/cap.png";
import tie from "./assets/tie.png";
import skirt from "./assets/skirt.png";
import tshirt from "./assets/tshirt.png";
import Navbar from "./components/Navbar/Navbar";
import b1 from "./assets/b2.png";
import Product from "./components/ProductCard/Product";
import b2 from "./assets/b1.png";
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import p4 from "./assets/p4.jpg";
import b3 from "./assets/b3.png";
import Footer from "./components/Footer/Footer";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [b1, b2, b3];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2310);

    return () => clearInterval(interval);
  }, [currentSlide]); // Run the effect whenever currentSlide changes

  return (
    <div className="Home">
      <img src={cap} alt="" id="cap" />
      <img src={tshirt} alt="" id="tshirt" />
      <img src={skirt} alt="" id="skirt" />
      <img src={tie} alt="" id="tie" />
      <Navbar />
      <div className="product-container">
        <h1>Recommended Products</h1>
        <div className="recc">
          <Product
            img={p1}
            alt="Shoe"
            title="Casual Leather Shoe"
            rating={4} // Example rating value
            desc="Comfortable leather shoe for everyday wear."
          />
          <Product
            img={p2}
            alt="Tie"
            title="Formal Tie"
            rating={4} // Example rating value
            desc="Elegant tie for formal occasions."
          />
          <Product
            img={p3}
            alt="Watch"
            title="Classic Wristwatch"
            rating={4} // Example rating value
            desc="Stylish wristwatch to complement your look."
          />
          <Product
            img={p4}
            alt="Bracelet"
            title="Metal Bracelet"
            rating={4} // Example rating value
            desc="Sleek metal bracelet to add a touch of sophistication."
          />
        </div>
        <h1>All Products</h1>
        <div className="all">
          <Product
            img={p1}
            alt="Shoe"
            title="Casual Leather Shoe"
            rating={4} // Example rating value
            desc="Comfortable leather shoe for everyday wear."
          />
          <Product
            img={p2}
            alt="Tie"
            title="Formal Tie"
            rating={4} // Example rating value
            desc="Elegant tie for formal occasions."
          />
          <Product
            img={p3}
            alt="Watch"
            title="Classic Wristwatch"
            rating={4} // Example rating value
            desc="Stylish wristwatch to complement your look."
          />
          <Product
            img={p4}
            alt="Bracelet"
            title="Metal Bracelet"
            rating={4} // Example rating value
            desc="Sleek metal bracelet to add a touch of sophistication."
          />
        </div>
        {/* <div className="carousel-container">
          <div className="carousel">
            <img
              src={images[currentSlide]}
              alt={`Offer ${currentSlide + 1}`}
              className="slide"
            />
            <button className="prev" onClick={prevSlide}>
              PREV
            </button>
            <button className="next" onClick={nextSlide}>
              NEXT
            </button>
          </div>
        </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
