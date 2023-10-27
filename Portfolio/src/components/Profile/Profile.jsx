import React, { useEffect, useState } from "react";
import "./Profile.css";
import pic from '../../assets/rohimage.png'
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
const Profile = () => {
  
  
 
  const themecolor=useSelector((state)=>state.theme.value)
  return (
    <div className="profile" style={{backgroundColor:themecolor==='#1a1a1a'?'#1a1a1a':'white'}}>
      <Container>
        <div className="profilecontainer">
          <Row className="rowprofile">
            <h3 style={{color:themecolor==='#1a1a1a'?'white':'black'}}>Hello,</h3>
            <h2>
            <h2 style={{color:themecolor==='#1a1a1a'?'yellow':'dodgerblue',marginTop:'-20px'}} className="names" >
              I'm Rohith M N
              </h2>
             <h3 style={{color:themecolor==='#1a1a1a'?'white':'black',marginTop:'-20px'}}>Front End Developer...</h3> 
             </h2>
            <p style={{fontStyle:'italic',color:themecolor==='#1a1a1a'?'white':'black',fontSize:'15px'}}>"As a passionate and dedicated fresher in the field of front-end development, I possess a solid understanding of React, HTML, CSS, and JavaScript. With a strong desire to create captivating user experiences, I am eager to contribute my creativity and coding skills to build modern and responsive websites.""</p>
            <Button className="hire">🧳 Hire Me</Button>
          </Row>
          <Row className="imagerow">
            <img src={pic} alt="rohith" className="image"/>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
