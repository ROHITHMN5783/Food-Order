import React from "react";

import "./Forgot.css";
const Passwordreset = () => {
  return (
    <div className="reset">
      <div>
        <div className="reset1">
          <div className="reset2">
            <label>Enter Email:-</label>
            <br />
            <input
              className="reset3"
              type="text"
              placeholder="Enter Email"
              required
            />
          </div>
          <div>
            <button
              onClick={() => alert("Password link sent successfully")}
              className="resetbtn"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passwordreset;
