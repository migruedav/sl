import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"
import "./NavBar.css"

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img className="logo" src={logo} alt="" />
          <div className="logo-text">FORMICA</div>
        </div>
        <div className="navbar-right">
          <NavLink to="/topposts" className="nav-item">
            TOP POSTS
          </NavLink>
          <NavLink to="/mentions" className="nav-item">
            MENTIONS
          </NavLink>
          <NavLink to="/sentiment" className="nav-item">
            SENTIMENT
          </NavLink>
          <NavLink to="/trends" className="nav-item">
            TRENDS
          </NavLink>
          <NavLink to="/keywords" className="nav-item">
            KEYWORDS
          </NavLink>
          <NavLink to="/metrics" className="nav-item">
            METRICS
          </NavLink>
          <NavLink to="/demographics" className="nav-item">
            DEMOGRAPHICS
          </NavLink>
        </div>
      </nav>
    </>
  );
}
