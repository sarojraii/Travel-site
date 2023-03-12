import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar(){
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return(
        <nav className="navbar">
            <h1><i>IK<span>KU</span></i></h1>
           
            <ul className = "items" >
                <li ><i className ="fa-solid fa-house"><Link className="nav-btn" to="Hero" spy={true} smooth={true} offset={-80} duration={500}>HOME </Link></i></li>
                <li ><i className ="fa-solid fa-briefcase"><Link className="nav-btn" to="Service" spy={true} smooth={true} offset={-90} duration={900}>SERVICE</Link></i></li>
                <li ><i className ="fa-solid fa-address-book"><Link className="nav-btn" to="Contact" spy={true} smooth={true} offset={50} duration={500}>CONTACT</Link></i></li>
            </ul>
            <div className ="menu-icon" onClick={handleClick}>
                {click ? <i className ="fa-solid fa-x"></i> : <i className ="fa-solid fa-bars"></i> }
            </div>
        
            
        </nav>


        
    )
}
