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
import { blue, grey, green, cyan } from '@material-ui/core/colors/';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Login from './login.js';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createBrowserHistory } from 'history'
import { FaUserAlt, FaRss, FaEnvelopeOpen, FaThumbsUp, FaBan, FaDelicious } from 'react-icons/fa';
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
import { FaJediOrder } from 'react-icons/fa';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Lines } from 'react-preloaders';
import { Scrollbars } from 'react-custom-scrollbars';

var async = require("async");
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
let card1 = style({
  backgroundColor: "#ffffff",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='139' height='139' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23e91e63' fill-opacity='0.33' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E")`,
})
const theme = createMuiTheme();
let Theme = createMuiTheme({ shadows: [0] });
let TOggle = createMuiTheme({ palette: { background: { paper: cyan[50] } } })
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
  postion: "relative",
  left: "-6%",
})
const right = style({
  marginLeft: "90px",
})
let Next = () => {
  const [state, setState] = useState({
    signin: false,
    signup: false,
    mystatus: "",
    Dialog: false,
    cookie: false,
    open: false,
    redirect: false,
    url: "",
    content: "",
    ImageData: "",
    Apidata: [],
    preloader: false,
    TK: true
  });
  useEffect(() => {
    console.log("1");
    setTimeout(() => {
      console.log("+++", localStorage.getItem(localStorage.getItem('Token')));

    }, 2000)
    fetch("https://apicalling.herokuapp.com/feed/Token", {
      method: 'POST',
      body: JSON.stringify({
        Token: localStorage.getItem('Token'),
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {

        if (res.status === 520) {
          console.log("->", localStorage.getItem('Token'));

          console.log(":::-->", localStorage.removeItem("Token"));
          setState({
            ...state,
            redirect: true,
          })
        }

      })
      .catch(err => {
        console.log("mission unsuccessful");
      });

    let cookieStatus = localStorage.getItem('Token');
    if (cookieStatus != undefined) {
      setState({
        ...state,
        cookie: true,
        open: false,
      })
    }
    else {
      setState({
        ...state,
        cookie: false,
        open: true,
      })
    }
    // der();
  }, []);
  let deletedata = (event) => {

    fetch("https://apicalling.herokuapp.com/feed/delete", {
      method: 'POST',
      body: JSON.stringify({
        Token: localStorage.getItem('Token'),
        deleteToken: event,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        if (res.status == 200) {
          fetch("https://apicalling.herokuapp.com/feed/get_post", {
            method: 'POST',
            body: JSON.stringify({
              Token: localStorage.getItem('Token'),
            }),
            headers: {
              'Content-Type': 'application/json',
            }
          })
            .then(res => {
              return res.json();

            })
            .then(data => {
              setState({
                ...state,
                Apidata: data.message,
                cookie: true,
                url: "",
                mystatus: "",
                content: ""
              })
            })

            .catch(err => {
              console.log("mission unsuccessful");
            });
        }
      })
      .catch(err => {
        console.log("mission unsuccessful");
      });
  }
  useEffect(() => {
    console.log("2");
    let sk = fetch("https://apicalling.herokuapp.com/feed/get_post", {
      method: 'POST',
      body: JSON.stringify({
        Token: localStorage.getItem('Token'),
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        return res.json();

      })
      .then(data => {
        setState({
          ...state,
          Apidata: data.message,
          cookie: true,
          url: "",
          mystatus: "",
          content: ""
        })
      })

      .catch(err => {
        console.log("mission unsuccessful");
      });
  }, []);
  //when acknowledgement occur so that time function start up

  let Apidata = () => {
    if (state.Apidata != undefined) {
      return (<div>
        {

          state.Apidata.map(ed =>

            <div key={ed.title} >
              <Card className={card1}>
                <Box textAlign="left">
                  <CardContent>
                    <img class="card-img-top" src={`https://apicalling.herokuapp.com/uploads/${ed.image}`} alt="Card image cap" />
                    <br />
                    <br />
                    <Typography variant="h5" component="h2">
                      {ed.title}
                    </Typography>
                  </CardContent>
                  <div class="card-body">
                    <p class="card-text">{ed.content}</p>
                  </div>
                  <CardActions>
                    <form>

                      <input type="hidden" id="dataa" value={ed.ID} />

                      <Button variant="contained" color="primary" size="small" value={ed.ID} >Edit</Button>
                      &nbsp;&nbsp;<Button variant="contained" color="secondary" size="small" value={ed.ID} onClick={() => { deletedata(ed.ID) }}>Delete</Button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <FaDelicious style={{ color: "#D509F3" }} />
                    </form>

                  </CardActions>
                </Box>
              </Card>
              <br />

            </div>
          )
        }

      </div>)
    }
    else {
      return (<div>
        <CircularProgress color="secondary" />
      </div>)
    }
  }
  let signin = () => {
    setState({
      ...state,
      signin: true,
    })
  }

  let returns = () => {
    setState({
      ...state,
      redirect: true,
    })
  }
  let image = (event) => {

    let path = event.target.files[0];
    console.log(path);

    setState({
      ...state,
      url: URL.createObjectURL(event.target.files[0]),
      ImageData: path,
    })
  }
  let call = () => {
    if (state.redirect) {
      return <Redirect to="/" />
    }
  }
  let handleClo = () => {
    setState({
      ...state,
      preloader: false,
      Dialog: false
    })
    fetch("https://apicalling.herokuapp.com/feed/get_post", {
      method: 'POST',
      body: JSON.stringify({
        Token: localStorage.getItem('Token'),
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        return res.json();

      })
      .then(data => {
        setState({
          ...state,
          Apidata: data.message,
          cookie: true,
          Dialog: false,
          url: "",
          mystatus: "",
          content: ""
        })
      })

      .catch(err => {
        console.log("mission unsuccessful");
      });
  }
  let textarea = (event) => {
    let content = event.target.value;
    setState({
      ...state,
      content: content,
    })
  }
  let Logout = () => {
    localStorage.removeItem("Token");
    setState({
      ...state,
      redirect: true,
    })
  }
  let page_load = () => {
    if (state.cookie) {
      return (<div>

        <Dialog
          onClose={handleClo}
          aria-labelledby="customized-dialog-title"
          open={state.Dialog}
          maxWidth='sm'
          fullWidth="true"
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            New Post
                  <div className="float-right">
              <IconButton aria-label="Close" onClick={handleClo}>
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>

          <DialogContent dividers>
            <form method="post" enctype="multipart/formdata">
              <form method="post" enctype="multipart/formdata">
                <div className="form-group">
                  <label for="exampleInputPassword1">File Upload</label>
                  <input type="file" name="Legend" className="form-control-file" id="Legend" onChange={image} />
                </div>
              </form>
              <div className="p-5">
                {console.log(">>>", state.url)}
                <img src={state.url} className="img-thumbnail border border-primary" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Content</label>
                <textarea type="textarea" value={state.content} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter DAta" onChange={textarea}>
                </textarea>
              </div>
            </form>

          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
              handleClose((xd) => {
                setTimeout(() => {

                  fetch("https://apicalling.herokuapp.com/feed/get_post", {
                    method: 'POST',
                    body: JSON.stringify({
                      Token: localStorage.getItem('Token'),
                    }),
                    headers: {
                      'Content-Type': 'application/json',
                    }
                  })
                    .then(res => {
                      return res.json();

                    })
                    .then(data => {
                      setState({
                        ...state,
                        Apidata: data.message,
                        cookie: true,
                        Dialog: false,
                        url: "",
                        mystatus: "",
                        content: ""
                      })
                    })

                    .catch(err => {
                      console.log("mission unsuccessful");
                    });
                }, 800);
              });
            }} variant="contained" color="primary">
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
                    <FaEnvelopeOpen className={mail} />&nbsp;&nbsp;Message</Button>
                  <Grid container container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-end">
                    <Button color="inherit"><FaRss />&nbsp;&nbsp;
              <Link to="/status" style={{ color: "white" }}>status</Link></Button>

                    <Button color="inherit" onClick={Logout}><FaUserAlt />&nbsp;&nbsp;Logout</Button>
                  </Grid>
                </Toolbar>

              </AppBar>
            </MuiThemeProvider>

            <br />
            <br />
            <br />
          </Grid>
        </Grid>
        <center>
          <div class="col-md-6 " data-spy="affix">
            <div class="form-group shadow-sm p-3 mb-5 bg-white rounded">
              <input type="text" value={state.mystatus} onChange={mystatus} style={{ height: 60 }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your posts" />
            </div>
            <button class="btn btn-primary float-left" type="submit" onClick={submitData}><FaThumbsUp />&nbsp;&nbsp;submit</button>
            <button class="btn btn-danger float-right" type="reset"><FaBan />&nbsp;&nbsp;cancel</button>
          </div>
          <br />
          <br />
          <br />
          <br />


          <div class="container">

            <div class="col-sm-0 col-md-2">
            </div>
            <div class="col-sm-12 col-md-8">

              <center>
                {Apidata()}



                <br />


              </center>
            </div>

            <div class="col-sm-0 col-md-2">
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
    setState({
      ...state,
      signup: true,
    })
  }
  let pre_loader = () => {
    if (state.preloader) {
      return <Lines background="#81d4fa" animation="slide-down" color={'#392CEA'} />
    }

  }
  let mystatus = (e) => {

    let text = e.target.value;
    console.log(text);
    setState({
      ...state,
      mystatus: text,
    })
  }
  let submitData = () => {
    if (state.mystatus.length > 6) {
      setState({
        ...state,
        Dialog: true,
      })
    }
    else {
      setState({
        ...state,
        Dialog: false,
      })
    }
  }
  let handleClose = (callback) => {

    setState({
      ...state,
      preloader: true,
    })
    let formData = new FormData();
    let Token = localStorage.getItem('Token');
    formData.append('post', state.mystatus);
    formData.append('image', state.ImageData);
    formData.append('content', state.content);
    formData.append('Token', Token);
    console.log("///....>", state.ImageData);
    fetch('https://apicalling.herokuapp.com/feed/post', {
      method: 'POST',
      body: formData,

    }).then(res => {
      //start the fetch data

      callback("i am call");

      //enD
      setState({
        ...state,
        Dialog: false,
        mystatus: "",
        content: "",
        url: "",
        preloader: false
      })

    }).catch(err => {
      console.log(err);
    });
  }
  return (
    <div className={appbar}>
      {page_load()}
      {call()}
      {pre_loader()}
    </div>
  );
}
export default Next;