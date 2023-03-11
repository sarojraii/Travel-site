import React, { useState } from "react";


export default function Navbar(){
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return(
        <nav className="navbar">
            <h1><i>GHUMNE<span> HO!</span></i></h1>
           
            <ul className = "items" >
                <li ><i className ="fa-solid fa-house"><a href ="/">HOME </a></i></li>
                <li ><i className ="fa-solid fa-briefcase"><a href="/Service">SERVICE</a></i></li>
                <li ><i className ="fa-solid fa-address-book"><a href="/Contact">CONTACT</a></i></li>
            </ul>
            <div className ="menu-icon" onClick={handleClick}>
                {click ? <i className ="fa-solid fa-x"></i> : <i className ="fa-solid fa-bars"></i> }
            </div>
        
            
        </nav>


        
    )
}
