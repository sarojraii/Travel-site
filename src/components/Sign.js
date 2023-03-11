import React from 'react'

const Signup = () => {
  return (
    <div>
           <div className="Signup">
            <div className="start-container">
                 <h2 className="head">Let's Get started !!</h2>
                <p className="write"> Full Name:</p>
                <input className="enter" type="Text" placeholder='Name' />
                <p className="write"> Phone Number:</p>
                <input className="enter" type="Text" placeholder='Number' />
                <p className="write"> Email:</p>
                <input className="enter" type="email" placeholder='Email' />
                <p className="write"> Password:</p>
                <input className="enter" type="password" placeholder='Password' />
                <p className="write"> Conform Password:</p>
                <input className="enter" type="password" placeholder='Password' />
                <p>
                    <button className="butt">SIGN UP</button>
                </p>
                <input className = "checked" type = "checkbox"></input> 
                <label className="remember">Remember Me</label> 

            </div>
           
        </div>
    </div>
  )
}

export default Signup
