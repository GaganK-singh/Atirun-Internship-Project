import "./App.css";
import Navbar from "./Page/Navbar";
import Footer from "./Page/Footer";
import Content from "./Page/Content";

function App() {
  return (
    <div className="App">
        <div className="Navbar" id="navID">
          <Navbar />
        </div>

        <div className="container-fluid ">
          <Content />
        </div>

        <div id="footer-content">
          <Footer />
        </div>
    </div>
  );
}

export default App;
