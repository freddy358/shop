import React from "react";
import PropTypes from "prop-types"

export const Card = ({img, name, rating, price, brand }) => {
  return (
    <div>
      <div className="card ">
        <img width={100} height={100} src={img} alt="photo" />
        <div>{name}</div>
        <h3>{brand}</h3>
        <div>Rating: {rating}</div>
        <h3>Price: ${price}</h3>
      </div>
    </div>
  );
};

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
    brand: PropTypes.string
  }