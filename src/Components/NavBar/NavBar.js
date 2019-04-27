import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <div className="nav-bar">
    <NavLink to={"./"} className="nav-child">
      Search For Gifs
    </NavLink>
    <NavLink to={"./Saved"} className="nav-child">
      View Saved Gifs
    </NavLink>
  </div>
);
export default NavBar;
