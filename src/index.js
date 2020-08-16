import React, { Component } from 'react';
//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import * as serviceWorker from './serviceWorker';

class App extends Component {
	render() {
         return(
         	<BrowserRouter>
         	<div>
         	<Navigation/>
         	<Switch>
          		<Route exact path="/" component={Home}/>
          		<Route path="/about" component={About}/>
        	</Switch>
         	</div>
         	</BrowserRouter>

         	 );

	}
}

ReactDOM.render(<App/>, document.getElementById('root'));



serviceWorker.unregister();
