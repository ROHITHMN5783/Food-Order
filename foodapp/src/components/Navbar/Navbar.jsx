import React, { useState } from "react";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHelp, MdFavorite } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className="flex items-center max-w-[1640px] mx-auto justify-between p-3">
      <div className="flex items-center ">
        <div onClick={() => setnav(!nav)} className="cursor-pointer">
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
          className="bg-transparent rounded-full p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search food"
        />
        
      </div>
      <button className="items-center rounded-full bg-black text-white p-2  md:flex mr-2">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
      {/*overlay mobile menu*/}
      {/*side bar menu*/}
      {nav === true && (
        <>
          <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-10"></div>

          <div className="fixed top-0 left-0 h-screen bg-gray-100 w-[280px] z-10 duration-300">
            <AiOutlineClose
              onClick={() => setnav(false)}
              size={25}
              className="absolute top-4 right-4 cursor-pointer"
            />
            <h2 className="text-2xl sm:text-2xl lg:4xl px-3 font-medium p-3">
              Enjoy<span className="font-bold p-2">Eats</span>
            </h2>
            <nav>
              <ul className="flex-col cursor-pointer">
                <li className="flex font-bold p-3  text-gray-20">
                  <TbTruckDelivery size={20} className="mr-2" />
                  Orders
                </li>
                <li className="flex font-bold p-3  text-gray-20">
                  <MdFavorite size={20} className="mr-2" />
                  Favourites
                </li>
                <li className="flex font-bold p-3  text-gray-20">
                  <FaWallet size={20} className="mr-2" />
                  Wallet
                </li>
                <li className="flex font-bold p-3  text-gray-20">
                  <MdHelp size={20} className="mr-2" />
                  Help
                </li>
                <li className="flex font-bold p-3  text-gray-20">
                  <AiFillTag size={20} className="mr-2" />
                  Promotions
                </li>
                <li className="flex font-bold p-3  text-gray-20">
                  <BsFillSaveFill size={20} className="mr-2" />
                  Best Ones
                </li>
                <li className="flex font-bold p-3  text-gray-20">
                  <FaUserFriends size={20} className="mr-2" />
                  Invite Friends
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
