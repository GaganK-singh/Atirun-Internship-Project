import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Page/Navbar";
import Footer from "./Page/Footer";
import Content from "./Page/Content";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Navbar" id="navID">
          <Navbar />
        </div>

        <div className="container-fluid ">
          <Content />
        </div>

        <div id="footer-content">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
