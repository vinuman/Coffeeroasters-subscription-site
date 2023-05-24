import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navmodal = () => {
  return (
    <div className="modal-window">
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
  );
};

export default Navmodal;
