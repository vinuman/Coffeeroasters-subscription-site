/* import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; */
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./assets/shared/desktop/logo.svg";
import Home from "./Home";
import About from "./About";
import CreatePlan from "./Create";

function App() {
  return (
    <Router>
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
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-plan" element={<CreatePlan />} />
      </Routes>
    </Router>
  );
}

export default App;
