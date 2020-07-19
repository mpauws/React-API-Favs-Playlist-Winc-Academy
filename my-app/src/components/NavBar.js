import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function NavBar() {
   return (
      <div>
         <NavLink to="/" exact={true} className="navbar-item">
            Song Overview
         </NavLink>
         <NavLink to="/About" className="navbar-item">
            About us
         </NavLink>
      </div>
   );
}
export default NavBar;
