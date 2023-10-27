import React, { useState } from "react";
import "./Header.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChangeTheme } from "../Reduxstore/ThemeReducer";
const Header = () => {
  const themecolor = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = (event) => {
    const links = document.querySelectorAll(".links a");
    links.forEach((link) => link.classList.remove("active"));
    event.target.classList.add("active");
    setMenuOpen(false);
  };
  const handleToggleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header" >
      <Container>
        <Row className="header1">
          <Col xs={12} md={6} className="head">
            <h2 className="name">Rohith M N</h2>
          </Col>
          <Col xs={12} md={6} className="links">
            <div
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={handleToggleClick}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className={`list ${menuOpen ? "open" : ""}`}>
              <li className="lists">
                <Link className="link" onClick={handleLinkClick} to="/">
                  Home
                </Link>
              </li>
              <li className="lists">
                <Link className="link" onClick={handleLinkClick} to="/project">
                  Projects
                </Link>
              </li>
              <li className="lists">
                <Link className="link" onClick={handleLinkClick} to="/skills">
                  Skills
                </Link>
              </li>
              <li className="lists">
                <Button className="contact" onClick={handleLinkClick}>
                  ✆ Contact Me
                </Button>
              </li>
              <li className="lists">
                <Button
                  style={{
                    backgroundColor:
                      themecolor === "#1a1a1a" ? "white" : "black",
                    color: themecolor === "#1a1a1a" ? "black" : "white",
                  }}
                  onClick={() =>
                    dispatch(
                      ChangeTheme(
                        themecolor === "#1a1a1a" ? "white" : "#1a1a1a"
                      )
                    )
                  }
                  className="mode"
                >
                  {themecolor === "white" ? "🌙 Dark Mode" : "🌕 Light Mode"}
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
