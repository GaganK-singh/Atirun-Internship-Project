import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes} from "react-router-dom";
import Home from "./Contnt/Home";
import List from "./Contnt/List";
import Borrow from "./Contnt/Borrow";
import Return from "./Contnt/Return";
import About from "./Contnt/About";

export default function Content() {
  return (
    <div className="row">
        <div className="col-lg-2 d-sm-none d-md-block d-none">
          <Sidebar />
        </div>
        <div className="col-lg-10">
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
