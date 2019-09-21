import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { style } from 'typestyle';
import { blue, grey, green } from '@material-ui/core/colors/';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Login from './login.js';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createBrowserHistory } from 'history'
import Signupcard from './signup-card.js';

// import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';
const appbar = style({
	flexGrow: 1,
})
const typo = style({
	fontFamily: "arial",
	fontWeight: 200,
	color: grey[50],
})
const theme = createMuiTheme();
let Theme = createMuiTheme({ shadows: [0] });

const login = style({
	marginLeft: "1020px",
	fontWeight: 500,
	color: grey[100],
});
const signup = style({
	color: grey[100],
});
const toolbar = style({
	backgroundColor: blue[400],

})
class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signin: false,
			signup: false,
		};
		this.signin = this.signin.bind(this);
		this.signIn = this.signIn.bind(this);
		this.signUp = this.signUp.bind(this);
	}
	signin() {
		this.setState({
			signin: true,
		})
	}
	signIn = () => {
		if (this.state.signin) {
			return <Redirect to='/' />
		}
		else if (this.state.signup) {
			return <Redirect to='/signUp' />
		}
	}
	signUp = () => {
		this.setState({
			signup: true,
		})
	}
	render() {
		return (
			<div className={appbar}>
				<Grid container>
					<Grid item xs={12} md={12} sm={12}>
						<MuiThemeProvider theme={Theme}>

							<AppBar>


								<Toolbar className={toolbar}>
									<Typography variant="h6" className={typo}>
										PandaChat
          </Typography>
									<Grid container container
										direction="row"
										justify="flex-end"
										alignItems="flex-end">

										<Button color="inherit" onClick={this.signin} variant="outlined" exact to="/signUp">
											<FaSignInAlt />&nbsp;&nbsp;Login</Button>

										<Button color="inherit" onClick={this.signUp}>Signup</Button>

									</Grid>
								</Toolbar>

							</AppBar>
						</MuiThemeProvider>

						<br />
						<br />
						<br />
					</Grid>
				</Grid>
				<Signupcard />
				{this.signIn()}

			</div>
		);
	}
}
export default Signup;