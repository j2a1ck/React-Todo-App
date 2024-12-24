import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#2C4E80" }}
      >
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/About">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
