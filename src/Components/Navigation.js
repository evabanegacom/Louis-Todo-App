import React from "react";
import { Link, Navlink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="danger" expand="lg">
      <Navbar.Brand href="/" className="mx-5">
        <h3>My Todos</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto mx-5 px-3 text-light">
          <Nav.Link href="/">
            <h4>Home</h4>
          </Nav.Link>
          <Nav.Link href="/About">
            <h4>About</h4>
          </Nav.Link>
          <Nav.Link href="/Todos">
            <h4>Todos</h4>
          </Nav.Link>
          <Nav.Link href="/Contact">
            <h4>Contact</h4>
          </Nav.Link>

          <NavDropdown
            title={<span className="h4">Services</span>}
            id="basic-nav-dropdown"
            className="text-"
          >
            <NavDropdown.Item href="#action/3.1">Service 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Service 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Service 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
