import React from "react";
import logo from '../logo.svg';
import './Navbar.css'



const Navbar = () => {
  return ( 
<React.Fragment>
<ul class="menu">
    <li class="menu_list">
        <span class="front fa fa-home"></span>
        <a href="/" class="side">Home</a>
    </li>
    <li class="menu_list">
        <span class="front fa fa-info"></span>
        <a href="/about" class="side">About</a>
    </li>
    <li class="menu_list">
        <span class="front fa fa-briefcase"></span>
        <a href="/portfolio" class="side">Portfolio</a>
    </li>
    <li class="menu_list">
        <span class="front fa fa-phone"></span>
        <a href="/contact" class="side">Contact</a>
    </li>
</ul>
</React.Fragment>
 
  );
}

export default Navbar;