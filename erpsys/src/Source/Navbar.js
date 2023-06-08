import React from "react";
import './Navbar.css';


export default function Navbar() {
  return (
    <>
      <div className="nav-temp" id="nav-temp">
        <div className="nav-content" id="home">
            <a href="/home" className="nav-buttons" >Home</a>
        </div>
        <div className="nav-content" id="about">
            <a href="/info" className="nav-buttons">Info</a>
        </div>
        <div className="nav-content" id="skils">
            <a className="nav-buttons" href="/detail">Details</a>
        </div>
        {/*  <div className="nav-content" id="work-exp"><button className="nav-buttons">Work Experience</button></div> */}
        <div className="nav-content" id="contact">
            <a className="nav-buttons" href="/contact">Contact</a>

        </div>
      </div>
    </>
  );
}
