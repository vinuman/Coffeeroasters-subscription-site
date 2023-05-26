import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import iconClose from "./assets/shared/mobile/icon-close.svg";

const Navmodal = () => {
  const handleNavModalClick1 = () => {
    document.querySelector(".modal-window").classList.remove("show-nav");
  };
  return (
    <>
      <div className="modal-window">
        <img onClick={handleNavModalClick1} src={iconClose}></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "2.4rem",
            alignItems: "center",
            justifyContent: "space-around",
            height: "20rem",
          }}
          className="modal-content-nav"
        >
          <Link
            onClick={handleNavModalClick1}
            style={{
              textDecoration: "none",
              color: "#333D4B",
              fontWeight: "bolder",
              padding: "2rem",
            }}
            to="/"
          >
            <p>Home</p>
          </Link>
          <Link
            onClick={handleNavModalClick1}
            style={{
              textDecoration: "none",
              color: "#333D4B",
              fontWeight: "bolder",
              padding: "2rem",
            }}
            to="/about"
          >
            <p>About Us</p>
          </Link>
          <Link
            onClick={handleNavModalClick1}
            style={{
              textDecoration: "none",
              color: "#333D4B",
              fontWeight: "bolder",
              padding: "2rem",
            }}
            to="/create-plan"
          >
            <p>Create your plan</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navmodal;
