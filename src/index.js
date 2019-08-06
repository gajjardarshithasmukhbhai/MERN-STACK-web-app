import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './component/navbar.js';
import Signup from './component/signup.js';
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
import Next from './component/aftersign.js';
import Status from './component/status.js';
class Darshit extends React.Component{
	render()
	{
		return(
				<div>
					<Navbar/>		
				</div>
			);
	}
}
ReactDOM.render(
<Router>
<div>
	<Route exact path="/" component={Darshit}/>
	<Route exact path="/signUp" component={Signup}/>
	<Route exact path="/aftersign" component={Next}/>
	<Route exact path="/status" component={Status}/>
</div>
</Router>
,document.getElementById("root"));
