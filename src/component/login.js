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
let card1=style({
  backgroundColor: "#ffffff",
backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%234FE'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
backgroundSize: "cover"

})
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
              <Card color="primary" className={card1}>
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