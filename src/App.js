import React, { Component } from 'react';
import Introduction from './components/introduction'
//import React from 'react';
import logo from './logo.svg';
import './App.css';


//function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
//}
class App extends Component {
  render() {
    return (

      
      // // <div id="colorlib-page">
      // //   <div id="container-wrap">
        <div id="colorlib-main">
        <div className="navigation-sub">
          <a href="" className="item">Projects</a>
          <a href="" className="item">Articles</a>
          <a href="" className="item">About</a>
        </div>
          <Introduction></Introduction>
        </div>
      // //   </div>
      // // </div>
    );
  }
}
export default App;