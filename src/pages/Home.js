import React from "react";
import "../styles/home.css";

const Home = () => {
  return ( 
<React.Fragment>
      <div className="contain">
      <div className="left">
            <h1>Hi, my name is Boluwatife <br/> Welcome to my portfolio website </h1>
         
            <a href="https://gitconnected.com/boluajileye/resume" target="_blank" className="btn">RESUME</a>
        </div>
        <div className="img">
            <img src="1.jpg" alt=""/>
        </div>
         
      </div>
  
     
</React.Fragment>
 
  );
}

export default Home;