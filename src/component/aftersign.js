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
import { FaUserAlt, FaRss, FaEnvelopeOpen, FaThumbsUp, FaBan } from 'react-icons/fa';
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
import Cookies from 'universal-cookie';

const cookies = new Cookies();
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
const theme = createMuiTheme();
let Theme = createMuiTheme({ shadows: [0] });
let TOggle=createMuiTheme({palette:{background:{paper:cyan[50]}}})
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
const posting = style({
    width: "40%",
    postion: "absolute",
    left: "-6%",
})
const right = style({
    marginLeft: "90px",
})
let Next = () => {
  const [state, setState] = useState({
        signin: false,
        signup: false,
        status: "",
        Dialog: false,
        cookie:false,
        open:false,
        redirect:false,
        url:"",
        content:"",
    });
  useEffect(()=>{
    fetch("https://apicalling.herokuapp.com/feed/Token",{
      method:'POST',
      body:JSON.stringify({
          Token:localStorage.getItem('Token'),
      }),
      headers:{
        'Content-Type':'application/json',
      }
    })
    .then(res=>{
          if(res.status===520)
          {
            cookies.remove("Token");
            setState({...state,
              redirect:true,
            })
          }

    })
    .catch(err=>{
      console.log("mission unsuccessful");
    });
 
  let cookieStatus=localStorage.getItem('Token');
  if(cookieStatus!=undefined)
  {
    setState({...state,
      cookie:true,
      open:false,
    })
  }
  else{
    setState({...state,
      cookie:false,
      open:true,
    })
  }

  },[]);
    
    let signin = () => {
        setState({ ...state,
            signin: true,
        })
    }
    let returns = ()=>{
      // return <Redirect to='/'/>
      setState({...state,
        redirect:true,
      })
    }
    let image= (event) =>{
      setState({...state,
        url:URL.createObjectURL(event.target.files[0]),
      })
    }
    let call = ()=>{
      if(state.redirect){
        return <Redirect to="/"/>
      }
    }
    let textarea= (event) =>{
      let content=event.target.value;
      setState({...state,
        content:content,
      })
    }
    let page_load = ()=> {
      if(state.cookie)
      {
        return (<div>
          
                    <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={state.Dialog}
                maxWidth='sm'
                fullWidth="true"
              >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  New Post
                  <div class="float-right">
                    <IconButton aria-label="Close" onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                </DialogTitle>
                <DialogContent dividers>
                <form  method="post" enctype="multipart/form-data">
                  
                  <div class="form-group">
                    <label for="exampleInputPassword1">File Upload</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" accept="image/*" onChange={image}/>
                  </div>
                  <div class="p-5">
                  <img src={state.url} class="img-thumbnail border border-primary"/>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Content</label>
                    <textarea type="textarea" value={state.content} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter DAta" onChange={textarea}>
                    </textarea>
                  </div>
                </form>

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} variant="contained" color="primary">
                    Accept
                  </Button>
                </DialogActions>
              </Dialog>

      <Grid container>
            <Grid item xs={12} md={12} sm={12}>
      <MuiThemeProvider theme={Theme}>

          <AppBar>
              <Toolbar className={toolbar}>
              <Button color="inherit" onClick={signin} variant="outlined" exact to="/signUp">
              <FaEnvelopeOpen className={mail}/>&nbsp;&nbsp;Message</Button>
       <Grid container container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"> 
              <Button color="inherit"  onClick={signUp}><FaRss/>&nbsp;&nbsp;Feed</Button>
           
              <Button color="inherit"  onClick={signUp}><FaUserAlt/>&nbsp;&nbsp;Logout</Button>
      </Grid>
              </Toolbar>

            </AppBar>
      </MuiThemeProvider>

            <br/>
            <br/>
            <br/>
      </Grid>
      </Grid>
      <center>
      <div class="col-md-6">
        <div class="form-group shadow-sm p-3 mb-5 bg-white rounded">
          <input type="text" value={state.mystatus} onChange={mystatus} style={{height:60}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your posts"/>
        </div>
        <button class="btn btn-primary float-left" type="submit" onClick={submitData}><FaThumbsUp/>&nbsp;&nbsp;submit</button>
        <button class="btn btn-danger float-right" type="reset"><FaBan/>&nbsp;&nbsp;cancel</button>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>


      <div class="container">

      <div class="col-sm-1 col-md-2">
      </div>

      <div class="col-sm-11 col-md-8">

      <center>
        <Card >
      <Box textAlign="left">

            <CardContent>
              <Typography  color="textSecondary" gutterBottom>
                Post
              </Typography>
              <Typography variant="h5" component="h2">
                kem che badha?
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" color="primary"  size="small">Edit</Button>
              <Button variant="outlined" color="secondary" size="small">Delete</Button>
            </CardActions>
      </Box>
          </Card>
          <br/>


      </center>
      </div>

      <div class="col-sm-1 col-md-2">
      </div>
      </div>
      </center>          


        </div>);
      }
      else{
        return (
          <MuiThemeProvider theme={TOggle}>
          <Dialog
          // onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={state.open}
        >
        <DialogTitle id="customized-dialog-title" >
            sorry sir
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Mr.Darshit Gajjar Not allow Directly to one route to another
            </Typography>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={returns} variant="outlined" color="primary">
              return
            </Button>
          </DialogActions>

        </Dialog>
          </MuiThemeProvider>
        )
      }
    }
    let signIn = () => {
        if (state.signin) {
            return <Redirect to='/signin' />
        } else if (state.signup) {
            return <Redirect to='/signUp' />
        }
    }
    let signUp = () => {
        setState({ ...state,
            signup: true,
        })
    }
    let mystatus = (e) => {
        let text = e.target.value;
        setState({ ...state,
            status: text,
        })
    }
    let submitData=()=>{
      if(state.status.length>6)
      {
        setState({...state,
          Dialog:true,
        })
      }
      else{
        setState({...state,
          Dialog:false,
        })
      }
    }
    let handleClose=()=>{
let formData=new FormData();
let Token=localStorage.getItem('Token');
formData.append('post',state.status);
formData.append('image',state.url);
formData.append('content',state.content);
formData.append('Token',Token);
fetch('https://apicalling.herokuapp.com/feed/post',{
      method:'POST',
      body:formData
    }).then(res=>{

          setState({...state,
          Dialog:false,
        })
    }).catch(err=>{
          console.log(err);
        });

    
        
    }
    return (
        <div className={appbar}>
        {page_load()}
        {call()}

      </div>
    );
}
export default Next;