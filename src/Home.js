import React, { Component } from 'react';
import Background from './img/myImg.png';
import './Header.css';

const myStyles ={
 backgroundImage: `url(${Background})`,
 width: '200px',
 height: '200px',
  backgroundSize: 'cover',
  display: 'block',
  borderRadius: '100px',
//  justifyContent: 'center',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'auto',
 }
class Home extends Component{
    render(){
        return(
            <div>
			<header style = {myStyles}>
			</header>
			<section><h1>Hello, I'm<br/><strong>Preethi Sudha Vasudev</strong></h1>
            <br/>
              I am a fullstack software developer focused on creating flawless web pages. 
            <br/>
            <br/>
           </section>
		   </div>
        );
    }
}
export default Home;