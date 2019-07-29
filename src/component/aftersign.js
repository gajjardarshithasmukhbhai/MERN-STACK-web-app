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
        ImageData:"",
        Apidata:[],
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
            localStorage.removeItem("Token");
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
    der();
  },[]);
let der =()=>{
    let sk=fetch("https://apicalling.herokuapp.com/feed/get_post",{
      method:'POST',
      body:JSON.stringify({
          Token:localStorage.getItem('Token'),
      }),
      headers:{
        'Content-Type':'application/json',
      }
    })
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data.message);
      setState({...state,
        Apidata:data.message,
        cookie:true,
      })
    })

    .catch(err=>{
      console.log("mission unsuccessful");
    });  
}
    let Apidata = ()=>{
      console.log("{{{",state.Apidata);
      if(state.Apidata!=undefined){
          return (<div>
        {

  state.Apidata.map(ed=>
    <div>

<Card >
      <Box textAlign="left">
            <CardContent>
            <img class="card-img-top" src={`https://apicalling.herokuapp.com/uploads/${ed.image}`} alt="Card image cap"/>
              <br/>
              <br/>
              <Typography variant="h5" component="h2">
                {ed.title}
              </Typography>
            </CardContent>
            <div class="card-body">
    <p class="card-text">{ed.content}</p>
  </div>
            <CardActions>
              <Button variant="outlined" color="primary"  size="small" value={ed.ID}>Edit</Button>
              <Button variant="outlined" color="secondary" size="small" value={ed.ID}>Delete</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              <FaDelicious style={{color:"#D509F3"}}/>
              
            </CardActions>
</Box>
          </Card>
       <br/>
          </div>
        )
}
      </div>)
      }
      else{
        return (<div>
            <CircularProgress color="secondary"/>
        </div>)
      }
}
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
      //problem ahiya hato hu always be
      // let path=event.target.value; karto to
      //je na ave be remember
      let path=event.target.files[0];
      // console.log("....>",path);  
      // setState({...state,
      // })
      setState({...state,
        url:URL.createObjectURL(event.target.files[0]),
        ImageData:path,  
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
                  <div className="float-right">
                    <IconButton aria-label="Close" onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                </DialogTitle>
                
                <DialogContent dividers>
                <form  method="post" enctype="multipart/formdata">
                  <form method="post" enctype="multipart/formdata">
                    <div className="form-group">
                      <label for="exampleInputPassword1">File Upload</label>
                      <input type="file" name="Legend" className="form-control-file" id="Legend" onChange={image}/>
                    </div>
                  </form>
                  <div className="p-5">
                  <img src={state.url} className="img-thumbnail border border-primary"/>
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
      <div class="col-md-6 " data-spy="affix">
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
      {Apidata()}

        
          <br/>


      </center>
      </div>

      <div class="col-sm-1 col-md-2">
      </div>
      </div>
      </center>          


        </div>);
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
formData.append('image',state.ImageData);
formData.append('content',state.content);
formData.append('Token',Token);
fetch('https://apicalling.herokuapp.com/feed/post',{
      method:'POST',
      body:formData,
      
    }).then(res=>{

  }).catch(err=>{
          console.log(err);
        });

    setTimeout(()=>{
      setState({...state,
          Dialog:false,
        })
    },400);
        
    }
    return (
        <div className={appbar}>
        {page_load()}
        {call()}

      </div>
    );
}
export default Next;