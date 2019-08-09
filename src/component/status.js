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
import {useDropzone} from 'react-dropzone';
import './status.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
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
const dot = style({
  backgroundColor:"#C7F0EE",
  borderRadius:"50%",
  height:"120px",
  width:"120px",
  border:"2px solid #FC0FE8",
  borderStyle:"dotted",
})
const status_img=style({
  borderRadius:"50%",
  height:"115px",
  width:"116px",
})
const toolbar = style({
    backgroundColor: blue[400],
})
let Theme = createMuiTheme({ shadows: [0] });

let Status=props=> {
    const [state,setState]=useState({
        url:"",
    })
const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

let drop_call =() =>{
  let Data=[];
    if(acceptedFiles.length>0){
      acceptedFiles.map(ex=>{
        Data=ex;
      });
      // setState({...state,
      //   url:URL.createObjectURL(Data),
      // })
      return <img src={URL.createObjectURL(Data)} className={status_img}/>
    }
}


  


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
    <br/>
            <br/>
            <br/>
          
  <Grid container>
            <Grid item xs={12} md={12} sm={12}>
  <Card>
              <section className="container" align="left">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
            <br/>
            <div className={dot}>
              {drop_call()}
            </div>  
      </div>
    
    </section>

<div style={{marginLeft:"220px",marginBottom:"10px"}}>
    <Button variant="contained" style={{backgroundColor:"#0FBBF3",color:"white"}}>Submit</Button>

</div> 
  </Card>
</Grid>
</Grid>
  <br/>
<Grid container>
            <Grid item xs={12} md={12} sm={12}>  
{/*card is start*/}
<Card>
  <List >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src="data:image/jpeg;base64,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" alt="Remy Sharp" style={{width:"56px",height:"56px"}} />
        </ListItemAvatar>
      &nbsp;
      &nbsp;
      &nbsp;
        <ListItemText
          primary="Nikunj Gajjar"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
              </Typography>
              {"July 20, 2014"}
            </React.Fragment>
          }
        />
      </ListItem>
</List>
</Card>
{/*card is end*/}
<br/>
{/*
  Darshit Gajjar card is start
*/}
<Card>
  <List >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src="data:image/jpeg;base64,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" alt="Remy Sharp" style={{width:"56px",height:"56px"}}/>
        </ListItemAvatar>
      &nbsp;
      &nbsp;
      &nbsp;
        <ListItemText
          primary="Darshit Gajjar"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
              </Typography>
              {"August 22, 2014"}
            </React.Fragment>
          }
        />
      </ListItem>
</List>
</Card>
{/*card is end*/}
</Grid>
</Grid>
        </div>

    )

}

export default Status;