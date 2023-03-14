import React from 'react'


const Signup = () => {
  const[fullName, setName] = React.useState("");
  const[phone, setPhone] = React.useState("");
  const[email, setEmail] = React.useState("");
  const[password, setPassword] = React.useState("");
  const[confirm, setConfirm] = React.useState("");

const [info, setInfo] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const newInfo = [
      ...info,
      {
        fullName: fullName,
        phone: phone,
        email: email,
        password: password,
        confirm: confirm,
      },
    ];

    setInfo(newInfo);
    console.log(newInfo);
  };

  return (
    <div id='sign'>
      <form onSubmit={handleSubmit}>
           <div className="Signup">
            <div className="start-container">
                 <h2 className="head">Let's Get started !!</h2>
                <p className="write"> Full Name:</p>
                <input className="enter" 
                type="Text" 
                placeholder='Name'
                value={fullName}
                onChange ={(e)=>setName(e.target.value)}
                />

                <p className="write"> Phone Number:</p>
                <input className="enter" 
                type="Text" placeholder='Number' 
                value={phone}
                onChange ={(e)=>setPhone(e.target.value)}/>

                <p className="write"> Email:</p>
                <input className="enter" 
                type="email" placeholder='Email'
                value={email}
                onChange ={(e)=>setEmail(e.target.value)} />

                <p className="write"> Password:</p>
                <input className="enter" type="password"
                 placeholder='Password'
                 value={password}
                 onChange ={(e)=>setPassword(e.target.value)}
                 />

                <p className="write"> Confirm Password:</p>
                <input className="enter" type="password"
                 placeholder='Password' 
                 value={confirm}
                 onChange ={(e)=>setConfirm(e.target.value)}
                 />

                <p>
                    <button className="butt">SIGN UP</button>
                </p>
                <input className = "checked" type = "checkbox"></input> 
                <label className="remember">Remember Me</label> 

            </div>
           
        </div>
        </form>
    </div>
  )
}


export default Signup
