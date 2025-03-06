import React from "react";
import logo from "../logo.svg";
import PropTypes from "prop-types";

export const Header = ({ inputHandler, navbarHandler }) => {
  return (
    <div className="header">
      <div>
        <img width={50} src={logo} alt="Bastet Builders" />
      </div>
      <div>
        <svg onClick={navbarHandler}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="70"
          height="45"
          viewBox="0,0,256,256"
        >
          <g
            fill="#413c22"
            stroke="none"
          >
            <g transform="scale(5.33333,5.33333)">
              <path d="M6,22h36v4h-36zM6,10h36v4h-36zM6,34h36v4h-36z"></path>
            </g>
          </g>
        </svg>
      </div>
      <input onChange={(e) => inputHandler(e.target.value)} />

      <div>Bastet Shop</div>
    </div>
  );
};

Header.propTypes = {
        inputHandler: PropTypes.func,
        navbarHandler: PropTypes.func
}
