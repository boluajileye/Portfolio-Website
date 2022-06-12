import React from "react";
import '../styles/about.css';


function About() {
  return ( 
    <div>
      <div class="about">
        <div class="abt">
            <div class="left">
                <h2>About Boluwatife</h2>
                <p>
                I am a software engineer
I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better. 
                </p>

            </div>
            <div class="img">
                <img src="2.jpg" alt=""/>
            </div>
        </div>
        <div class="abt">
            <div class="img">
                <img src="3.jpg" alt=""/>
            </div>

            <div class="left">
                <h2>What i do</h2>
                <p>I normally use Javascript for the front-end, either alone or in combination with popular frameworks like ReactJS and VueJS. I also use Sass, CSS, and, where necessary, any of their friends: Bootstrap, Material, and so on, to make the web seem nice.

I also use Javascript for the backend (NodeJS, Express, MongoDB, etc). But, of course, I do PHP whenever the project calls for it (Wordpress, Laravel, etc).
                </p>

            </div>
          
        </div>
    </div>
    </div>
  );
}

export default About;