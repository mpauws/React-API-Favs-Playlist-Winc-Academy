import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function NavBar() {
   return (
      <div className="nav-bar">
         <NavLink to="/" exact={true} className="nav-bar-item">
            Song Overview
         </NavLink>
         <NavLink to="/About" className="nav-bar-item">
            About us
         </NavLink>
      </div>
   );
}
export default NavBar;
