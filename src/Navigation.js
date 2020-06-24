import React, { Component } from 'react';

//import './App.css';
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import image from './img/github-mark.png';



class Navigation extends Component {
  render() {
    // const sections = ['Home', 'About','portfolio','contacts'];
    // const navlinks = sections.map(section=>{
    //   return(
    //     <li><a href={"#" + section}>{section}</a></li>
    //     )

    // });
    return (
      <nav>
      <h2> My React portfolio</h2>
      <ul>

        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about/">About</NavLink></li>
        <li><a href="https://www.linkedin.com/in/preethi-sudha-vasudev-0b48787a/">LinkedIn</a></li>
        <li><a href="https://github.com/preethiGIT/">GitHub</a></li>

        
      </ul>
      </nav>


      
    );
  }
}
export default Navigation;