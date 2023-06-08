import "./App.css";
import Home from "./Source/Home";
import Navbar from "./Source/Navbar";
import Info from "./Source/Info"
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Contact from "./Source/Contact";
import Details from "./Source/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Screen" id="Screen">
          <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail" element={<Details />} />
          </Routes>
        </div>
        <div className="navbar" id="navbar">
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
