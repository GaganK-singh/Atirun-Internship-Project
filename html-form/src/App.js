import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="header" id="header">
          <span>Html Form</span>
        </div>
        <div className="hform" id="hform">
          <div>
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname" /> <br />
          </div>
          <div>
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname" /> <br />
          </div>
          <div>
            <label htmlFor="mail">Email:</label>
            <input type="text" id="e-mail" name="e-mail" /> <br />
          </div>
          <div>
            <label htmlFor="pass">Password:</label>
            <input type="password" id="password" name="password" /> <br />
          </div>

          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}

export default App;
