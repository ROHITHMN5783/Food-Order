// Navbar.js

import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import log from "../../assets/log.png";
import { useSelector, useDispatch } from "react-redux";
import { Changetheme } from "../Reduxstore/ThemeReducer";
import { logoutstate } from "../Reduxstore/AuthReducer";


const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const themecolor = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginHandler = () => {
    navigate("/auth");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <div className="nav">
      <div
        className="nav1"
        
      >
        <div className="nav3">
          <div className="navrow">
            <img src={log} alt="logo" className="log" />
            <img className="logo" src={logo} alt="Food-App" />
          </div>
        </div>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav4 ${isOpen ? "open" : ""}`}>
          <div className="navbar">
            <NavLink className="link" activeclassname="active" to="/">
              <div className="tag">Home</div>
            </NavLink>
            <NavLink className="link" activeclassname="active" to="/menu">
              <div className="tag">Menu</div>
            </NavLink>
            <NavLink className="link" activeclassname="active" to="/about">
              <div className="tag">About</div>
            </NavLink>
           
            {!auth.isAuthenticated ? (
              <button onClick={LoginHandler} className="login">
                Login
              </button>
            ) : (
              <button className="login" onClick={() => dispatch(logoutstate())}>
                Logout
              </button>
            )}
            {auth.isAuthenticated &&
            <button
              onClick={() =>
                dispatch(
                  Changetheme(
                    themecolor === "black" ? "rgb(149, 187, 219)" : "black"
                  )
                )
              }
              className="theme"
            >
              {themecolor === "rgb(149, 187, 219)" ? " 🔅 Light" : "🌓 Dark"}
            </button>
            }
            
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
