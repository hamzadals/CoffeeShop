import React from "react";
import "./Navbar.css";
import logo from './Coffee/background11.jpg';
const Navbar = () => {
    return(
<>
<nav className="nav">
  
    <a href="http://" target="_blank" rel="noopener noreferrer"><img src={logo} alt=""/></a>
    <a href="http://" target="_blank" rel="noopener noreferrer">HOME</a>
    <a href="http://" target="_blank" rel="noopener noreferrer">DEMO-PAGES</a>
    <a href="http://" target="_blank" rel="noopener noreferrer">BLOCKS</a>
    <a href="http://" target="_blank" rel="noopener noreferrer">DEMO-PAGES</a>
    <a href="http://" target="_blank" rel="noopener noreferrer"><button>Download</button></a>
  
</nav>

</>
    );
}
export default Navbar