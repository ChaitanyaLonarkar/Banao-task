import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch, FaBell, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { GrStarOutline } from "react-icons/gr";
import { MdExplore } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import logo from "../assets/logo.svg";
import logos from "../assets/logo-small.webp";
import { MdOutlineMenu } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
// import { FaSearch } from "react-icons/fa";

// import "@fontsource/poppins";
import "../Css/Navbar.css";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
export default function Navbarr() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1160);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar-1">
        <nav className="navbarrr">
          <div className="navbar-logo">
            {isSmallScreen ? (
              <img src={logos} alt="logo" className="logo" />
            ) : (
              <img src={logo} alt="logo" className="logo" />
            )}
          </div>

          {isSmallScreen ? (
            <div className="linksss">
              <div className="navbar-icons">
                <FaSearch style={{ fontSize: "25px", margin: "0px 5px" }} />
                <FaBell style={{ fontSize: "25px", margin: "0px 5px" }} />

                <button className="toggle" onClick={toggleMenu} >
                  <GiHamburgerMenu
                    style={{ fontSize: "25px", margin: "margin" }}
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="nr">
              <div className="navbar-search">
                <input type="text" placeholder="Search here..." />
                <button>
                  <FaSearch />
                </button>
              </div>
              <div className="navbar-links">
                <MdExplore className="gr" />
                <NavDropdown title="Explore" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <GrStarOutline className="gr" />

                <NavDropdown title="Hobbies" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="navbar-icons">
                <FaBookmark style={{}} />
                <FaBell />
                <FaShoppingCart />
                <button className="sign-in-btn">Sign In</button>
              </div>
            </div>
          )}

        </nav>
      </div>
      {isOpen?<div className="toggleer">
        <IoClose style={{fontSize:"2rem"}} onClick={toggleMenu} />
        <button className="sign-in-btn">Sign In</button>
        <div className="navbar-linkss">
          <div style={{ display: "flex", gap: "15px" }}>
            <MdExplore className="gr" />
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <GrStarOutline className="gr" />

            <NavDropdown title="Hobbies" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>:""}
      
    </>
  );
}
