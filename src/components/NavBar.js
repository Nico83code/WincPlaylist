import React from "react";
import { NavLink } from "react-router-dom";
import "./components.css";

function NavBar() {
  return (
    <div>
      <NavLink to="/" exact={true} className="navbar">
        Home
      </NavLink>
      <NavLink to="/Aboutus" className="navbar">
        About us
      </NavLink>
    </div>
  );
}
export default NavBar;
