/* import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; */
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./assets/shared/desktop/logo.svg";
import Home from "./Home";
import About from "./About";
import CreatePlan from "./Create";
import Navmodal from "./Navmodal";

import facebook from "./assets/shared/desktop/icon-facebook.svg";
import twitter from "./assets/shared/desktop/icon-twitter.svg";
import instagram from "./assets/shared/desktop/icon-instagram.svg";

function App() {
  return (
    <Router>
      <Navmodal />
      <nav>
        <img src={logo}></img>
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "#83888F" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#83888F" }}
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#83888F" }}
              to="/create-plan"
            >
              Create your Plan
            </Link>
          </li>
        </ul>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-plan" element={<CreatePlan />} />
      </Routes>

      {
        <footer>
          <nav>
            <img src={logo}></img>
            <ul>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#83888F" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#83888F" }}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#83888F" }}
                  to="/create-plan"
                >
                  Create your Plan
                </Link>
              </li>
            </ul>
          </nav>
          <div className="social-media">
            <img src={facebook}></img>
            <img src={twitter}></img>
            <img src={instagram}></img>
          </div>
        </footer>
      }
    </Router>
  );
}

export default App;
