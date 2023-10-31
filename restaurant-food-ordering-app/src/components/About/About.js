import React from "react";
import "./About.css";
import { useSelector } from "react-redux";

const About = () => {
  const themecolor = useSelector((state) => state.theme.value);
  return (
    <div
      className="about"
      style={{
        backgroundColor: themecolor === "black" ? "aliceblue" : "black",
        color: themecolor === "black" ? "black" : "white",
      }}
    >
      <div>
        <div>
          <h1 className="heading">About Us</h1>
          <div>
            <h1 className="subheading">
              Welcome To Jssateb Online Food Ordering System
            </h1>
            <h4>
              At Jssateb, we believe in crafting more than just meals; we create
              experiences. Our culinary artisans pour passion into every dish,
              infusing flavors that dance on your palate. With an ambiance
              designed to soothe and flavors meant to enthrall, we invite you to
              savor moments with us.
            </h4>
          </div>

          <div>
            <h2>Our Story</h2>
            <h4 style={{ margin: "10px" }}>
              Born from a love for food and a desire to share it with the world,
              Jssateb has been a labor of culinary love. Our chefs draw
              inspiration from global cuisines, blending tradition with
              innovation to serve you an unforgettable dining adventure.
            </h4>
          </div>
          <div>
            <h2>Dine with Us</h2>
            <h4>
              Whether it's an intimate dinner for two or a celebration with
              friends and family, we invite you to be our guest. Join us at
              Jssateb for a journey of taste, comfort, and warm hospitality.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
