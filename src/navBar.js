import "./navBar.css"; 
import { NavLink } from "react-router-dom"; 

function Nav() {
  return (  
    <nav className="nav">  
        <div className="name">Shaaz</div> 
        <ul>   
            <li><NavLink to="/">About Me</NavLink></li> 
            <li><NavLink to="/projects">Projects</NavLink></li> 
            <li><NavLink to="/experience">Experience</NavLink></li> 
            <li><NavLink to="/contact">Contact Me</NavLink></li> 
            <li><NavLink to="/resume">Resume</NavLink></li>
        </ul>
    </nav>
  );
}

export default Nav;

