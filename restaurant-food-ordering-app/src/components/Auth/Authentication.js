import React, { useState } from "react";

import "./Auth.css";
import { NavLink, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginstate } from "../Reduxstore/AuthReducer";

const Authentication = ({ isLogin, setisLogin }) => {
  const themecolor = useSelector((state) => state.theme.value);
const navigate=useNavigate();
  const dispatch = useDispatch();
  
  const [login, setlogin] = useState({
    pass: "",
    email: "",
    confirm: "",
  });

  const CreateAccount = () => {
    isLogin ? setisLogin(false) : setisLogin(true);
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    if (
      login.email.trim() === "" ||
      login.pass.trim() === "" 
      
    ) {
      alert("Please Fill all fields and ensure passwords match");
      return;
    }

    try {
      let res;
      if (isLogin) {
        res = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLFgCH68JDkcxUxHDaUfTZqApnoMcPQek",
          {
            method: "POST",
            body: JSON.stringify({
              email: login.email,
              password: login.pass,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();
        if (!res.ok) {
          alert("Login was Unsuccessfull");
        } else {
          alert("Login was Successfull");
          dispatch(loginstate(data));
          navigate('/menu')
        }
        setlogin({
          ...login,
          email: "",
          pass: "",
        });
      } else {
        res = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBLFgCH68JDkcxUxHDaUfTZqApnoMcPQek",
          {
            method: "POST",
            body: JSON.stringify({
              email: login.email,
              password: login.pass,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      const data = await res.json();
      if (!res.ok) {
        alert("Account was not created");
      } else {
        console.log(data);

        alert("Account created successfully");
        setisLogin(true)
        
      }
    } catch (error) {
      console.error(error);
    }
    setlogin({
      ...login,
      email: "",
      pass: "",
      confirm: "",
    });
  };

  return (
    <div className="auth">
      <div
        className="form"
        style={{
          backgroundColor:
            themecolor === "black" ? "rgb(141, 165, 185)" : "black",
          color: themecolor === "black" ? "black" : "white",
        }}
      >
        <div className="logins">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        </div>
        <div className="mail">
          <label>Email:-</label>
          <br />
          <input
            className="input1"
            type="text"
            placeholder="Enter Email"
            value={login.email}
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
            required
          />
        </div>
        <div className="pass">
          <label>Password:-</label>
          <br />
          <input
            className="input1"
            type="text"
            value={login.pass}
            placeholder="Enter Password"
            onChange={(event) =>
              setlogin({ ...login, pass: event.target.value })
            }
            required
          />
        </div>
        {!isLogin && (
          <div className="pass">
            <label>Confirm Password:-</label>
            <br />
            <input
              className="input1"
              type="text"
              placeholder="ReEnter Password"
              value={login.confirm}
              onChange={(e) => setlogin({ ...login, confirm: e.target.value })}
              required
            />
          </div>
        )}
        <div>
          <button onClick={SubmitHandler} className="loginbtn">
            {isLogin ? "Login" : "Sign up"}
          </button>
        </div>
        <div>
          <button className="create" onClick={CreateAccount}>
            {isLogin
              ? "Create New Account? Register here"
              : "Already Have an account?Click Here"}
          </button>
        </div>
        {isLogin && (
          <NavLink activeclassname="active" className="forgot" to="/reset">
            Forgot Password ? Reset Password
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Authentication;
