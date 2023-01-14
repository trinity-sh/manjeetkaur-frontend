import React from "react";
import "./styles/navbar.css";
import Topbar from "./Topbar";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <Topbar />
      <div className="navbarContainer">
        <div className="navbarLinks">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
          </ul>
        </div>
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbarLinks">
          <ul>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a className="donateBtn" href="/donate">
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
