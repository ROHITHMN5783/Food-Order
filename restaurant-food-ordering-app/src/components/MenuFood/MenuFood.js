import React from "react";

import "./MenuFood.css";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../Reduxstore/CartReducer";
const MenuFood = ({ items }) => {
  const themecolor = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();
  const Addtocarthandler = (item) => {
    dispatch(addtoCart(item));
  };
  return (
    <div className="menu">
      <div className="menu1">
        <div
          className="menu2"
          style={{
            backgroundColor: themecolor === "black" ? "aliceblue" : "black",
          }}
        >
          {items.map((item) => (
            <div className="menu3" key={item.id}>
              <div className="menu4">{item.title}</div>
              <img src={item.img} alt={item.title} className="foodmenu" />
              <div className="price">Rs:-{item.price}</div>
              <button
                onClick={() => Addtocarthandler(item)}
                className="addtocart"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuFood;
