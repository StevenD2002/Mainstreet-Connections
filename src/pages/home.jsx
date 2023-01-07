/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../App.css";
import { Location } from "./location";
import dollar from "../icons/badge-dollar-regular.svg";
import ambulance from "../icons/ambulance-regular.svg";
import glasses from "../icons/glasses-solid.svg";
import ServiceModal from "../components/servicemodal";
import ServiceItems from "../components/ServiceItems";
import Sidebar from "../components/sidebar";

import logo from "../OrangeLogoBackgroundRemoved.png"
export function HomePage() {
  return (
    <div id="main">
      <Sidebar />
      <div className="home-wrapper">
        <div className="home-header">
     <img src={logo} alt="logo" style={{ width: '100px', position: 'absolute', left: '55px', top: '20px'}}/> 
        </div>
        <div className="initial-view">
          <h2>Data, Fiber Optic, and Telecom Solutions</h2>
          <ServiceModal />
          <div className="Service">
            <ServiceItems />
          </div>
        </div>
      </div>
      <div className="line-full"></div>
      <div className="about-wrapper" id="why">
        <h2>Why us?</h2>
        <div className="about-content">
          <div className="about-item">
            <img src={glasses} alt="glasses" className="about-icon" />

            <h3>Experience</h3>
            <p>
              For over 30 years, we have delivered the best in fiber optic,
              network, data and voice cabling to our customers. Our technicians
              are able to adapt to any problem you may have.
            </p>
          </div>
          <div className="about-item">
            <img src={ambulance} alt="ambulance" className="about-icon" />
            <h3>Care</h3>
            <p>
              If your equipment goes down, we are the ones to call. Our response
              time and precision can't be found anywhere else!
            </p>
          </div>
          <div className="about-item">
            <img src={dollar} alt="money" className="about-icon" />
            <h3>Value</h3>
            <p>
              As a veteran owned business, we know the value of hard work. You
              can be sure that you are getting much more than your money's worth
              when you partner with us.
            </p>
          </div>
        </div>
      </div>
      <div className="location-wrapper" id="Contact">
        <div className="location-content">
          <h2>Contact</h2>
          <div className="line"></div>
          <div className="group">
            <p>1-888-824-2339</p>
            <p>service@mainstreetconnections.com</p>
          </div>
          <div className="group">
            <p>519 E Chester St,</p>
            <p>Jackson, TN 38301</p>
          </div>
          <h2>Hours</h2>
          <div className="line"></div>
          <div className="group">
            <p>Mon - Fri</p>
            <p>8:00AM - 5:00PM </p>
          </div>
        </div>
        <div className="location-content">
          <Location />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
