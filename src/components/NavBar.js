import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={`/`}>
          VENTO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={`/`}>
              Home
            </Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={`/categoria/OnePiece `}>
                OnePiece
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/categoria/Tops `}>
                Tops
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/categoria/Bottoms `}>
                Bottoms
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={`/cart`}>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
