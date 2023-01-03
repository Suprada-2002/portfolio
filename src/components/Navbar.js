import "../styles/Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    
<div className="navbar-container">
 <Link to='/about' className="link">About</Link>
 <Link to='/projects' className="link">Projects</Link>
 <Link to='/skills' className="link">Skills</Link>
 <Link to='/contact' className="link">Contact</Link>
</div>
  );
};

export default Navbar;
