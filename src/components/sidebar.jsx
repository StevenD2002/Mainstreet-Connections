import React from "react";
import { Link } from "react-router-dom";
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
export default function Sidebar() {
  return (
    <>
      <div id="mySidenav" class="sidenav">
        <a className="closebtn" onClick={() => closeNav()}>
          &times;
        </a>
        <Link to="/">Home</Link>
        <a href="#why">Why Us?</a>
        <a href="#wqdqwd">Services</a>
        <a href="#dqw">Clients</a>
        <a href="#Contact">Contact</a>
        <Link to="/hiring">Hire</Link>
      </div>

      <span
        style={{
          fontSize: 30,
          cursor: "pointer",
          left: "30px",
          top: "15px",
          position: "absolute",
          color: "white",
          zIndex: 1,
        }}
        onClick={() => openNav()}
      >
        &#9776;
      </span>
    </>
  );
}
