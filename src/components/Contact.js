import React from "react";


function Contact(){
    return(
        <div className="contact" id="Contact">
            <div className="c-page">
                <label className="c-us">CONTACT US</label>
                <div className="c-main">
                    <div className="c-info">
                        <h3 className="c-head">Get in touch</h3>
                        <p className="c-para">Email: raii.saroj21@gmail.com</p>
                        <p className="c-paraa">Phone: +977 XXXXXXXX</p>
                        <label className="c-paraaa">If you have any further enquires,<br></br>
                           please fill the given form.</label>
 
                    </div>
                    <div className="c-form">
                        <p className="c-type"> Full Name:</p>
                        <input type="Text" placeholder='Enter your Name' />
                        <p className="c-type"> Email:</p>
                        <input type="Text" placeholder='Enter your mail' />
                        <p className="c-type"> Comment:</p>
                        <input className="c-comment" type="Text" placeholder='Write down your Comments' />

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;
