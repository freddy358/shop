import React from "react";
import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import PropTypes from "prop-types";

export const Main = ({
  openNavbar,
  inputHandler,
  navbarHandler,
  changeCategoryHandler,
  filtredProduct,
  selectedCategory,
  addToFavorites,
  favoritesIds,
}) => {
  return (
    <>
      <Header inputHandler={inputHandler} navbarHandler={navbarHandler} />
      {openNavbar && (
        <Navbar
          changeCategoryHandler={changeCategoryHandler}
          selectedCategory={selectedCategory}
        />
      )}
      <div className="card-block">
        {filtredProduct.map((el, index) => (
          <Card
            addToFavorites={addToFavorites}
            favoritesIds={favoritesIds}
            key={index}
            id={el.id}
            brand={el.brand}
            name={el.name}
            img={el.img}
            rating={el.rating}
            price={el.price}
          />
        ))}
      </div>
    </>
  );
};

Main.propTypes = {
    openNavbar: PropTypes.func,
    inputHandler: PropTypes.func,
    navbarHandler: PropTypes.func,
    changeCategoryHandler: PropTypes.func,
    filtredProduct: PropTypes.array,
    selectedCategory: PropTypes.string,
    addToFavorites: PropTypes.func,
    favoritesIds: PropTypes.array,

}