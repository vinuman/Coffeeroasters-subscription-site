import logo from "./assets/shared/desktop/logo.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
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
      </div>
    </footer>
  );
};

export default Footer;
