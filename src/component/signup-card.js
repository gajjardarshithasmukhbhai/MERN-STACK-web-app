import React,{useState,useEffect} from 'react';
import Card from '@material-ui/core/Card';
import {Redirect} from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {style} from 'typestyle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';
import blue from 'material-ui/colors/blue';
import Button from '@material-ui/core/Button';
import '../css/login.css';
import {FaGoogle } from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';

import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const theme = createMuiTheme();
// note:
// always createMuiTheme() e configuration che check krva console.log(theme) kari ne tamari exctly te object che eni value
// change kari nakhvi
// jyare configuration karya pachi e theme ne apply te MuiThemeProvider
// ma te thay che
console.log(theme);
const blueTheme = createMuiTheme({ palette: {main: blue[100]} })
const buttonTheme = createMuiTheme({ palette: { main:green }})


const margin=style ({
    marginLeft: theme.spacing.unit,
    width:"80%",
  })
const button=style ({
    marginLeft: theme.spacing.unit,
    backgroundColor:green,
  })



let SignupCard=()=> {

  let [state,setState]=useState({
    email:"",
    password:"",
    retype:"",
    open:false,
    err:"",
    aftersign:false,
  })
  let email=(k)=>{
    let email=k.target.value;
    setState({...state,
      email:email,
    })
  }
  let password=(j)=>{
    let password=j.target.value;
    setState({...state,
      password:password,
    })
  }
  let retype=(l)=>{
    let retype=l.target.value;
    setState({...state,
      retype:retype,
    })
  }
  let closedialog=()=>{
    setState({...state,
      open:false,
    })
  }
  let aftersign=()=>{
    if(state.aftersign)
    {
      return <Redirect to="/aftersign"/>
    }
  }
  let submitData=()=>{
    fetch('https://apicalling.herokuapp.com/feed/signupost',{
    method:'POST',
    body:JSON.stringify({
      email:state.email,
      password:state.password,
      retype:state.retype,
    }),
    headers:{
      'Content-Type':'application/json',
      Accept: 'application/json',
    }
  })
  .then(res=>{
    if(res.status===422)
    {
      console.log("i have problem");
      throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
    }
    else if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
         throw new Error('Creating a user account your password length is minimum 6 to 9 and email is authenticate');

        }
        // setState({...state,
        //   aftersignin:true,
        // })
        setState({...state,
          email:"",
          password:"",
          retype:"",
          aftersign:true,
        })
    return res.json();
  })
  .then(resData=>{
      setState({
          aftersign:true,
      })
    })
  .catch(err=>{
    console.log("react",err.message);
    let error=err.message;
    setState({...state,
        open:true,
        err:error
      })
  });
  }
  return (
      <div class="container">

            <Dialog
        open={state.open}
        // onClose={handleClose}
        // PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Hello sir/madam
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {state.err}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  color="primary" onClick={closedialog}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
<Grid container>
      <Grid item xs={12} md={12} sm={12} xs={12}>

        <center>

          <div class="col-sm-12">
            
<Box boxShadow={2}>
              <Card color="primary">
               <CardContent>
<MuiThemeProvider theme={blueTheme}>
<Box color="primary.main">
                <Typography variant="h5" component="h2"  gutterBottom>
          SignUp in PandaChat
        </Typography>
</Box>
</MuiThemeProvider>
        <form>
        <ThemeProvider theme={theme}>
          <TextField
          className={margin}
          hintText="Enter your email-id"
          label="E-mail Id"
          onChange={email}
          value={state.email}
          floatingLabelText="E-mail Id"
          id="mui-theme-provider-outlined-input"
        />
        <br/>
        <br/>
        <TextField
          className={margin}
          hintText="Enter your password"
          label="password"
          onChange={password}
          value={state.password}
          type="password"
          floatingLabelText="password"
          id="standard-password-input"
          margin="normal"
        />
        <br/>
        <br/>
        <TextField
          className={margin}
          value={state.retype}
          onChange={retype}
          hintText="Enter your password"
          label="Re-password"
          type="password"
          floatingLabelText="Password"
          id="standard-password-input"
          margin="normal"
        />
        </ThemeProvider>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
<Box position="absolute"  top={300}
        left="13%"
        zIndex="modal" height="65%">
        <Button variant="contained" color="primary" size='medium' onClick={submitData}>
          submit
        </Button>
        &nbsp;
        <Button variant="contained" color="secondary" >
          cancel
        </Button>
</Box>
<br/>
<br/>
<Grid container>
<Grid item xs={12} sm={12} >
<Box position="absolute"  top={360}
        left="13%"
        zIndex="modal" justify="center" height="65%">

      <Button variant="contained" color="primary" >
        <FaGoogle/>&nbsp;&nbsp;&nbsp;Google SignUp
      </Button>&nbsp;&nbsp;&nbsp;
      <Button variant="contained" color="secondary" >
        <FaFacebookF/>&nbsp;&nbsp;&nbsp;Facebook SignUp        
      </Button>
</Box>
</Grid>
</Grid>
<br/>
<br/>
        </form>
        </CardContent>
              </Card>             

</Box>

                    
          </div>

        </center>

        </Grid>
</Grid>
        {aftersign()}

        </div>

    )

}

export default SignupCard;