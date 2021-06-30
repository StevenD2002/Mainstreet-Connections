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
import "../App.css";
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
export function HomePage() {
  return (
    <div>
      <div id="mySidenav" class="sidenav">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <span
        style={{
          fontSize: 30,
          cursor: "pointer",
          left: "30px",
          top: "15px",
          position: "absolute",
          color: "white",
        }}
        onClick={() => openNav()}
      >
        &#9776;
      </span>
      <div className="home-wrapper">
        <div className="initial-view">
          <h1>Lets get you connected!</h1>
          <Button size="lg">Make a request</Button>
        </div>
      </div>
    </div>
  );
}
