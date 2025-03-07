import React from "react";
import PropTypes from "prop-types";
import { FavoriteIcon } from "./FavoriteIcon";

export const Card = ({
  img,
  name,
  rating,
  price,
  brand,
  addToFavorites,
  favoritesIds,
  id,
}) => {
  return (
    <div className="card ">
      <img width={100} height={100} src={img} alt="photo" />
      <div className="card-content">
        <div>
          <div>{name}</div>
          <h3>{brand}</h3>
          <div>Rating: {rating}</div>
          <h3>Price: ${price}</h3>
        </div>
        <div>
          <FavoriteIcon
            onClick={() => addToFavorites(id)}
            active={favoritesIds.includes(id)}
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  brand: PropTypes.string,
  addToFavorites: PropTypes.func,
  id: PropTypes.number,
  favoritesIds: PropTypes.array,
};
