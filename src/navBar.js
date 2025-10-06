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
            <li><a id="r" href="/Myresume.pdf" target="_blank" rel="noopener noreferrer">MyResume</a></li>
        </ul>
    </nav>
  );
}

export default Nav;
//_blank means open new tab instead of replacing page
//Resume.pd root path instead of public/...
//<a> is like when u resume and add video link <vido link> --> {https:youtube...}