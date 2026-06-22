import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Hozify</h2>
      
      <ul className="navbar-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Servicess">Service</NavLink></li>
        <li><NavLink to="/partner">Partner</NavLink></li>
        <li><NavLink to="/franchise">Franchise</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
      </ul>

      <div className="navbar-buttons">

        <Link to="/MoreServ"
        onClick={() => window.scrollTo(0,0)}>
        <button className="book-btn">Book Service</button>
        </Link>

        <Link to="/"
        onClick={() => window.scrollTo(4090,4090)}>
        <button className="download-btn">Download App</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;