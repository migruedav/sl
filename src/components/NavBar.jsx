import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import "./NavBar.css";
import { supabase } from "../supabase";
import { AiOutlineLogout } from "react-icons/ai";

export default function NavBar() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error.message);
    } else {
      console.log("User signed out successfully");
      // Aquí puedes hacer cualquier otra acción necesaria después de hacer sign out
    }
  };

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
          <NavLink to="/demographics" className="nav-item">
            DEMOGRAPHICS
          </NavLink>
          <NavLink
            title="Logout"
            to="/login"
            onClick={handleSignOut}
            style={{
              backgroundColor: "red",
              height: "25px",
              width: "25px",
              borderRadius: "50%",
              margin: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiOutlineLogout size={20} color={"black"} />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

/* <NavLink to="/metrics" className="nav-item">
            METRICS
          </NavLink>*/
