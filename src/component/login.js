import React,{useState,useEffect} from 'react';
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

// note:
// tme const [state,setState]=useState({
//     email:"",
//   }) 

//   kro ena thi tmare te state te overwrite thai jya
//   etle jo tamare update evu te karva magta hoy 
//   to tamre possible nahi thay but enu solution
// e che ke tamare te pehla na state ma update karvanu
// che jene lidhe tamre automatic update thay nake tamre
// overwrite thai jay 
// jena mate tamare state ne te merge te karvu padse
// je ne tame aa rite kari sako
    // |
// setState({...state,
//       email:k.target.value,
//     })
// na ke aa rite
        // |<---avu kyare na krvu anathi tame te overwrite kro cho
// setState({
//       email:k.target.value,
//     })
  // const [state,setState]=useState({
  //   email:"",
      // open:true,
  // })
  // |
  // ane tame aa rite pan kari sako uprna same state ne
  // const [open,setopen]=useState[true];
  // const [email,setemail]=useState[""];
//useEffect ma useEffect(() => console.log('mounted or updated'),[]); aa rite karo to te
// akj vakhat call thase because last ma [] che je componentDidMount tarike vartse
//jyare without [] e componentwillupdate tarike
// otherwise te always call
//jyare []<-ma tme te je state change ke props change
// thay te rakhavi sako

const Login=props=> {
  // useEffect(() => console.log('mounted or updated'),[]);
  //tame state and setState ni jagya e biju  
  // kai pan name api sako cho
  const [state,setState]=useState({
    email:"",
    password:null
  })
  // const [email,setEmail]=useState["darshit"];

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
  const submit=()=>{
    fetch('http://localhost:7080/feed/Loginpost',{
      method:'POST',
      body:JSON.stringify({
        email:state.email,
        password:state.password,
      }),
      headers:{
        'Content-Type':'application/json',
        Accept:'application/json',
      }
    }).then(res=>{
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
    .then(data=>{
      console.log("data");
    })
    .catch(err=>{
      console.log("my error",err);
    });
  }
  // const emailcheck=(k)=>{
  //   let email=k.target.value;
  //   setEmail(email);
  // }
  return (

  		<div class="container">
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
				</div>

  	)

}

export default Login;