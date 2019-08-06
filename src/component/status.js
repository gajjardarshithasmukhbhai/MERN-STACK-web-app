import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { style } from 'typestyle';
import { blue, grey, green ,cyan} from '@material-ui/core/colors/';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider} from '@material-ui/styles';
import Login from './login.js';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createBrowserHistory } from 'history'
import { FaUserAlt, FaRss, FaEnvelopeOpen, FaThumbsUp, FaBan,FaDelicious } from 'react-icons/fa';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import CardMedia from '@material-ui/core/CardMedia';
import {FaJediOrder} from 'react-icons/fa';
import CircularProgress from '@material-ui/core/CircularProgress';
const Teme = createMuiTheme({ palette: {primary:{main:blue[400]}} });
/*cookie*/
const theme = createMuiTheme();
const blueTheme = createMuiTheme({ palette: {main: blue[100]} })
const buttonTheme = createMuiTheme({ palette: { background:green }})
const margin=style ({
    marginLeft: theme.spacing.unit,
    width:"80%",
  })
const button=style ({
    marginLeft: theme.spacing.unit,
    backgroundColor:green,
  })
const appbar = style({
    flexGrow: 1,
})
const typo = style({
    fontFamily: "arial",
    fontWeight: 200,
    color: grey[50],
})
const mail = style({
    fontSize: "26px",
})
const toolbar = style({
    backgroundColor: blue[400],
})
let Theme = createMuiTheme({ shadows: [0] });

const Status=props=> {
        
  return (
      <div className="container">
      <MuiThemeProvider theme={Theme}>
                        
                        <AppBar>
              <Toolbar className={toolbar}>
              <Button color="inherit"  variant="outlined" exact to="/signUp">
              <FaEnvelopeOpen className={mail}/>&nbsp;&nbsp;Message</Button>
       <Grid container container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"> 
              <Button color="inherit"><FaRss/>&nbsp;&nbsp;
              <Link to="/status" style={{color:"white"}}>status</Link></Button>
           
              <Button color="inherit" ><FaUserAlt/>&nbsp;&nbsp;Logout</Button>
      </Grid>
              </Toolbar>

            </AppBar>
            </MuiThemeProvider>
        </div>

    )

}

export default Status;