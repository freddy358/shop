import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Card } from "./components/Card";

const products = [
  {
    id: Math.random,
    brand: "Apple",
    name: "iPhone 15 Pro",
    price: 1100,
    category: "phone",
    rating: 4.7,
    img: "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "Google",
    name: "Pixel 8 Pro",
    price: 999,
    category: "phone",
    rating: 4.6,
    img: "https://m.media-amazon.com/images/I/610q+UV1bcL._AC_SL1000_.jpg",
  },
  {
    id: Math.random,
    brand: "OnePlus",
    name: "OnePlus 12",
    price: 899,
    category: "phone",
    rating: 4.4,
    img: "https://m.media-amazon.com/images/I/71NW2QaIzlL._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "Xiaomi",
    name: "Xiaomi 14 Ultra",
    price: 1200,
    category: "phone",
    rating: 4.6,
    img: "https://m.media-amazon.com/images/I/71xKlKdfLEL._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "Samsung",
    name: "Galaxy Z Flip 5",
    price: 1050,
    category: "phone",
    rating: 4.5,
    img: "https://m.media-amazon.com/images/I/51kso67o64L._AC_SL1000_.jpg",
  },
  {
    id: Math.random,
    brand: "Sony",
    name: "Sony Xperia 1 V",
    price: 1200,
    category: "phone",
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/81YofuHBMZL._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "Asus",
    name: "ROG Phone 7",
    price: 999,
    category: "phone",
    rating: 4.7,
    img: "https://m.media-amazon.com/images/I/61Yt0kHPfzL._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "Motorola",
    name: "Motorola Edge 40 Pro",
    price: 850,
    category: "phone",
    rating: 4.2,
    img: "https://m.media-amazon.com/images/I/61xrE9hme2L._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "Nothing",
    name: "Nothing Phone 2",
    price: 750,
    category: "phone",
    rating: 4.4,
    img: "https://m.media-amazon.com/images/I/71hsuRTQ29L._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "Realme",
    name: "Realme GT 6",
    price: 700,
    category: "phone",
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/71lvbZV8TeL._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "Apple",
    name: "MacBook Air M3",
    price: 1199,
    category: "laptop",
    rating: 4.8,
    img: "https://m.media-amazon.com/images/I/71tvcLXujtL._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "Asus",
    name: "Zenbook 14 OLED (Q420)",
    price: 1099,
    category: "laptop",
    rating: 4.7,
    img: "https://m.media-amazon.com/images/I/51NHqusyNGL._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "Lenovo",
    name: "ThinkPad X1 Carbon Gen 12",
    price: 1361,
    category: "laptop",
    rating: 4.6,
    img: "https://m.media-amazon.com/images/I/61GSvJjxBuL._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "MSI",
    name: "MPG 321URX QD-OLED",
    price: 899,
    category: "monitor",
    rating: 4.8,
    img: "https://m.media-amazon.com/images/I/71+M9XHrHiL._AC_SL1200_.jpg",
  },
  {
    id: Math.random,
    brand: "LG",
    name: "UltraGear 27GR93U",
    price: 649,
    category: "monitor",
    rating: 4.7,
    img: "https://m.media-amazon.com/images/I/91KCKmfgCoL._AC_SL1500_.jpg",
  },
  {
    id: Math.random,
    brand: "Dell",
    name: "UltraSharp 27 (U2723QE)",
    price: 699,
    category: "monitor",
    rating: 4.6,
    img: "https://m.media-amazon.com/images/I/A1Iqr2v1SIL._AC_SL1500_.jpg",
  },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [openNavbar, setOpenNavbar] = useState(false);
  const [category, setCategory] = useState("");

  const filtredProduct = products.filter(
    (el) =>
      el.category.includes(category) &&
      el.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const inputHandler = (text) => {
    setSearchValue(text);
  };
  const navbarHandler = () => {
    setOpenNavbar(!openNavbar);
  };

  const changeCategoryHandler = (changedCategory) => {
    if (changedCategory === category) {
      setCategory("");
      setOpenNavbar(!openNavbar);
    } else {
      setCategory(changedCategory);
      setOpenNavbar(!openNavbar);
    }
  };

  return (
    <div>
      <Header inputHandler={inputHandler} navbarHandler={navbarHandler} />
      {openNavbar && (
        <div className="navbar">
          <div
            onClick={() => changeCategoryHandler("phone")}
            className={category === "phone" && "active"}
          >
            Smart Phones
          </div>
          <div
            onClick={() => changeCategoryHandler("laptop")}
            className={category === "laptop" && "active"}
          >
            Laptops
          </div>
          <div
            onClick={() => changeCategoryHandler("monitor")}
            className={category === "monitor" && "active"}
          >
            Monitors
          </div>
        </div>
      )}
      <div className="card-block">
        {filtredProduct.map((el, index) => (
          <Card
            key={index}
            brand={el.brand}
            name={el.name}
            img={el.img}
            rating={el.rating}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
