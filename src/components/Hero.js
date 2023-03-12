import React from "react";
import { Link } from "react-scroll";

export default function Hero(){
    
return(
    <section className="hero-container" id="Hero">
       <div className="content">
            <h1>ADVENTURE <span>AWAITS</span> </h1>
            <h3><span>WELCOME</span> TO MY SITE</h3>
 
        
        </div>
        <div className="hero-btn">
        <button className="btn-scroll">
            <Link to="sign" spy={true} smooth={true} offset={50} duration={800}>
                GET STARTED
            </Link>
            </button>
           
            </div>
    </section>
)

}
