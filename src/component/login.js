import React,{useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Card from '@material-ui/core/Card';
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
import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
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


const Login=props=> {
useEffect(()=>{
let cookieStatus=localStorage.getItem('Token')
if(cookieStatus!=undefined)
{
  setState({...state,
    cookie:true,
  })
}
else{
    setState({...state,
    cookie:false,
  })
}
},[])
  const [state,setState]=useState({
    email:"",
    password:null,
    open:false,
    err:"",
    aftersign:false,
    cookie:false,
  })
  // const [email,setEmail]=useState["darshit"];
  const closedialog=()=>{
      setState({...state,
        open:false,
      })
    }
    const full_page=()=>{
      if(state.cookie)
      {
        fetch('https://apicalling.herokuapp.com/feed/Token',{
          method:'POST',
          body:JSON.stringify({
              Token:localStorage.getItem('Token'),
          }),
          headers:{
            'Content-Type':'application/json',
          }
        }).then(data=>{
          console.log("mission successfull");
        })
        .catch(err=>{
          console.log();
        });
         return <Redirect to="/aftersign"/>
      }   
      else{
        return (<div>
          <Dialog
        open={state.open}
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
<MuiThemeProvider theme={Teme}>

          <Button variant="contained" color="primary" onClick={closedialog}>
            Ok
          </Button>
</MuiThemeProvider>
        </DialogActions>
      </Dialog>
<Grid container>
      <Grid item xs={12} md={12} sm={12}>

        <center>

          <div className="col-sm-12">
            
<Box boxShadow={2}>
              <Card color="primary">
               <CardContent>
<MuiThemeProvider theme={blueTheme}>
<Box color="primary.main">
                <Typography variant="h5" component="h2"  gutterBottom>
          Login in PandaChat
        </Typography>
</Box>
</MuiThemeProvider>        
        <form>
        <ThemeProvider theme={theme}>
          <TextField
          className={margin}
          hintText="Enter your email-id"
          label="E-mail Id"
          value={state.email}
          floatingLabelText="E-mail Id"
          id="mui-theme-provider-outlined-input"
          onChange={email}
        />
        <br/>
        <br/>
        <TextField
          className={margin}
          hintText="Enter your password"
          label="password"
          type="password"
          onChange={Password}
          value={state.password}
          floatingLabelText="Password"
          id="mui-theme-provider-outlined-input"
        />
        </ThemeProvider>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
<Box position="absolute"  top={220}
        left="13%"
        zIndex="modal" height="65%">
        <Button variant="contained" color="primary" size='medium' onClick={submit}>
          submit
        </Button>
        &nbsp;
        <Button variant="contained" color="secondary" >
          cancel
        </Button>
</Box>

        </form>
        <Box fontWeight={500} textAlign="center"  fontSize={16}>
          <Typography >
            i am gajjar darshit i make the Mern stack<br/> complete web app in this web app i use<br/>React ,node js,mongodb,encryption security and i design scalable API<br/> 
          </Typography>
        </Box>
        </CardContent>
              </Card>             

</Box>

                    
          </div>

        </center>

        </Grid>
</Grid>
        {aftersign()}


        </div>)
      }
    }
  const email=(k)=>{
    setState({...state,
      email:k.target.value,
    })
  }
  const Password=(k)=>{
    setState({...state,
      password:k.target.value,
    })
  }
  let aftersign=()=>{
    if(state.aftersign)
    {
      return <Redirect to="/aftersign"/>
    }
  }
  let submit=(ed)=>{
    fetch('https://apicalling.herokuapp.com/feed/Loginpost',{
      method:'POST',
      body:JSON.stringify({
        email:state.email,
        password:state.password,
      }),
      headers:{
        'Content-Type':'application/json',
      }
    })
    .then(res=>{
    if(res.status===400)
    {
      console.log("i have problem");
      throw new Error(
            "Validation failed.your password is wrong"
      );
    }
    else if(res.status===500)
    {
      throw new Error(
            "Internet error check your internet connection"
          );
    }
    else if(res.status===510)
    {
      throw new Error(
            "you have no account in our database"
          );
    }
    setState({...state,
      email:"",
      password:"",
      retype:"",
      aftersign:true,
    })
    return res.json();
  })
  .then(resData=>{
    localStorage.setItem('Token',resData.token);

    // cookies.set('Token',resData.token, { path: '/' });
     console.log(resData.token);
      setState({...state,
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
      <div className="container">
      {full_page()}
      

        </div>

    )

}

export default Login;