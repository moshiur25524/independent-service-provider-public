import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () =>{
    signOut(auth)
  }
  return (
    <div className="header">
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
              {
                user?
                  <button onClick={handleSignOut}>Sign Out</button>
                :
                <Link to="/login">Login</Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
