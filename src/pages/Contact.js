import React from "react";
import "../styles/contact.css";


function Contact() {
  return ( 
    <React.Fragment>
     
  <div className="contact" id="contact">
        <div className="title">
            <h1>Reach Out</h1>
            <p>
            I am Available for software engineer roles on a Full-Time,  Part-Time or Contract basis. Also Internship positions.
            </p>
        </div>
      <div className="card">
      <h3 className="info">Contact Info</h3>

<div className="cinfo">
    <h5>Where to Find Me</h5>
    <p>
        Agege, Lagos,<br/>
        Nigeria.
    </p>
</div>

<div className="cinfo">
    <h5>Email Me At</h5>
    <p>
        boluwatifeajileye@<br/>gmail.com
    </p>
</div>

<div className="cinfo">
    <h5>Call Me</h5>
    <p>
        Mobile: (+234) 706 560 5600
    </p>
</div>
        </div>
    </div>
    </React.Fragment>
  );
}

export default Contact;