import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/home">Knowledge Hut</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navLinks mx-5">
              <Link to="/home">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/checkout">CheckOut</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/login">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
