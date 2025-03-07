import React from "react";
import PropTypes from "prop-types";

export const FavoriteIcon = ({ active, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className="card-icon"
      fill={active ? "#f0b433" : "#fff"} //#f0b433
      height="30px"
      width="30px"
      version="1.1"
      id="Filled_Icons"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="-1.2 -1.2 26.40 26.40"
      enableBackground="new 0 0 24 24"
      xmlSpace="preserve"
      stroke="#f0b433"
      strokeWidth="1.272"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#d39831"
        strokeWidth="3.8400000000000007"
      >
        {" "}
        <g id="Favorite-Filled">
          {" "}
          <path d="M12,22C9.63,20.17,1,13.12,1,7.31C1,4.38,3.47,2,6.5,2c1.9,0,3.64,0.93,4.65,2.48L12,5.78l0.85-1.3 C13.86,2.93,15.6,2,17.5,2C20.53,2,23,4.38,23,7.31C23,13.15,14.38,20.18,12,22z"></path>{" "}
        </g>{" "}
      </g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="Favorite-Filled">
          {" "}
          <path d="M12,22C9.63,20.17,1,13.12,1,7.31C1,4.38,3.47,2,6.5,2c1.9,0,3.64,0.93,4.65,2.48L12,5.78l0.85-1.3 C13.86,2.93,15.6,2,17.5,2C20.53,2,23,4.38,23,7.31C23,13.15,14.38,20.18,12,22z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

FavoriteIcon.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
