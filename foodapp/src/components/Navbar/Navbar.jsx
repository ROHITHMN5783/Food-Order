import React from "react";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="flex items-center max-w-[1640px] mx-auto justify-between p-3">
      <div className="flex items-center ">
        <div className="cursor-pointer">
          <AiOutlineMenu size={40} />
        </div>
        <h1 className="text-2xl sm:text-2xl lg:4xl px-3 font-medium">
          Enjoy <span className="font-bold">Eats</span>
        </h1>
        <div className=" hidden lg:flex">
          <p className="font-bold rounded-full bg-black text-white w-[80px] items-center text-center cursor-pointer">
            Delivery
          </p>
          <p className="ml-2  rounded-full bg-gray-200 font-medium w-[70px] text-center cursor-pointer">
            Pick Up
          </p>
        </div>
      </div>
      <div className="bg-gray-300 flex items-center rounded-full sm:w-[400px] lg:[550px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent rounded-full p-1 w-full focus:outline-none"
          type="text"
          placeholder="Search food"
        />
      </div>
      <button className="items-center rounded-full bg-black text-white p-2.5 hidden md:flex">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
      <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-10"></div>
    </div>
  );
};

export default Navbar;
