import React from "react";
import PropTypes from "prop-types";


export const Navbar = ({changeCategoryHandler, selectedCategory}) => {
  return (
    <div className="navbar">
      <div
        onClick={() => changeCategoryHandler("phone")}
        className={selectedCategory === "phone" ? "active" : ""}
      >
        Smart Phones
      </div>
      <div
        onClick={() => changeCategoryHandler("laptop")}
        className={selectedCategory === "laptop" ? "active" : ""}
      >
        Laptops
      </div>
      <div
        onClick={() => changeCategoryHandler("monitor")}
        className={selectedCategory === "monitor" ? "active" : ""}
      >
        Monitors
      </div>
    </div>
  );
};


Navbar.propTypes = {
        changeCategoryHandler: PropTypes.func,
        selectedCategory: PropTypes.string
}