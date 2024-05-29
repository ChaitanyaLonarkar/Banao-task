import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch, FaBell, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import { GrStarOutline } from "react-icons/gr";
import { MdExplore } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import logo from '../assets/logo.svg'
// import "@fontsource/poppins";
import "../Css/Navbar.css";
export default function Navbarr() {
  return (
    <>
      {/* <Navbar expand="lg" className="nav bg-body-tertiary">
        <Container fluid className="inside-nav">
          <Navbar.Brand href="#" className="logo">
            <div className="inside-logo ">
              <div>
                <span>h</span>
              </div>
              <div>
                <div>
                  <p>
                    hobby<span>cue</span>
                  </p>
                </div>
                <div>
                  <i>Your Hobby, Your Community</i>
                </div>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup>
            </Form>
            <Nav
              className="me-auto my-2 my-lg-0 text-black"
              style={{ maxHeight: "100%" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>

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
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      {/* <div style={{background:"#d9caca", height:"80px"}}>Navbar</div> */}
      <div className="navbar-1">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search here..."
             
            />
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
            <button className="sign-in-btn">
              Sign In
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
