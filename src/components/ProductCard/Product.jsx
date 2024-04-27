import React from "react";
import "./Product.css";

const Product = (props) => {
  const renderStars = () => {
    const solidStars = [];
    const regularStars = [];

    for (let i = 0; i < props.rating; i++) {
      solidStars.push(<i className="fa-solid fa-star"></i>);
    }

    for (let i = 0; i < 5 - props.rating; i++) {
      regularStars.push(<i className="fa-regular fa-star"></i>);
    }

    return [...solidStars, ...regularStars];
  };

  return (
    <div className="ProductCard">
      <img src={props.img} alt={props.alt} />
      <div className="top">
        <h2>{props.title}</h2>
        <div className="rating">{renderStars()}</div>
      </div>
      <p className="desc">{props.desc}</p>
      <div className="foot">
        <button>Read More</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
