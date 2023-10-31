import React from "react";
import pizza from "../../assets/pizza.jpeg";
import dosa from "../../assets/dosa.jpeg";
import idli from "../../assets/idli.jpeg";
import badam from "../../assets/badam.jpeg";
import coffee from "../../assets/coff.jpeg";
import north from "../../assets/north.jpeg";
import south from "../../assets/south.jpeg";
import momo from "../../assets/momos.jpeg";
import chicken from "../../assets/burger.jpeg";
import kara from "../../assets/kara.jpeg";
import MenuFood from "./MenuFood";
import nood from "../../assets/nood.jpeg";
import cake from "../../assets/cake.jpg";

const Items = [
  {
    id: 1,
    title: "Pizza",
    img: pizza,
    price: 228,
    des: "",
    quantity:1
  },
  { id: 2, title: "Chicken Burger", img: chicken, price: 190, des: "",quantity:1 },
  { id: 3, title: "Dosa", img: dosa, price: 175, des: "",quantity:1 },
  { id: 4, title: "Idli Vada Sambar", img: idli, price: 250, des: "",quantity:1 },
  { id: 5, title: "North Indian Meals", img: north, price: 125, des: "",quantity:1 },
  { id: 6, title: "South Indian Meals", img: south, price: 320, des: "",quantity:1 },
  { id: 7, title: "Kara Bath", img: kara, price: 420, des: "",quantity:1 },
  { id: 8, title: "Momos", img: momo, price: 270, des: "",quantity:1 },
  { id: 9, title: "Coffee", img: coffee, price: 50, des: "",quantity:1 },
  { id: 10, title: "Badam Milk", img: badam, price: 70, des: "",quantity:1 },
  { id: 11, title: "Black Forest Cake", img: nood, price: 95, des: "",quantity:1 },
  { id: 12, title: "Noodles", img: cake, price: 115, des: "",quantity:1 },
];
const MenuItems = () => {
  return (
    <>
      <MenuFood items={Items} />
    </>
  );
};

export default MenuItems;
