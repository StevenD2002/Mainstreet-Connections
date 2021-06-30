import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
  Button,
} from "react-bootstrap";
export function HomePage() {
  return (
    <div className="home-wrapper">
      <Navbar variant="dark" bg="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Mainstreet Connections</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Apply</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="initial-view">
        <h1>Lets get you connected!</h1>
        <Button size="lg">Make a request</Button>
      </div>
    </div>
  );
}
