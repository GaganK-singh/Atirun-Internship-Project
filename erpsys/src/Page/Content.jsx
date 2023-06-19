import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Contnt/Home";
import List from "./Contnt/List";
import Borrow from "./Contnt/Borrow";
import Return from "./Contnt/Return";
import About from "./Contnt/About";

export default function Content() {
  return (
    <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/borrow" element={<Borrow />} />
            <Route path="/return" element={<Return />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </div>
    </div>
  );
}