
import React from 'react'
import {NavLink} from "react-router-dom"
function Navbar(){
  return (
<nav >
        <NavLink className="nav-link" to="/Homee">Home</NavLink>
        <NavLink className="nav-link" to="/Students">Student</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
</nav>
  )
}

export default Navbar;

