import React from "react";
import food from "../../assets/food.jpeg";

import "./FoodHome.css";
import { useNavigate } from "react-router-dom";
import chef from '../../assets/chef.jpg'
const FoodHome = () => {
    const navigate=useNavigate();
    const ViewHandler=()=>{
        navigate('/auth')
    }
  return (
    <div className="food">
      <div className="food1">
        <div className="food2">
          <img className="foodimg" src={food} alt="food" />
        </div>
        <div className="food3">
          <h1>Order Today</h1>
          <h2>Food gets Delivered To ur Home in Few Minutes..!</h2>
          <div>
          <img className="chef" src={chef} alt='chef'/>
          </div>
          <div className="explore">
          
<button className="explorebtn" onClick={ViewHandler}>View Menu ➤</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodHome;
