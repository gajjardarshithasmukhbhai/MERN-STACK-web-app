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
import { blue, grey, green, cyan, pink } from '@material-ui/core/colors/';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Login from './login.js';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createBrowserHistory } from 'history'
import { FaUserAlt, FaRss, FaEnvelopeOpen, FaThumbsUp, FaBan, FaDelicious } from 'react-icons/fa';
import { MdKeyboardBackspace } from 'react-icons/md';
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
import { useDropzone } from 'react-dropzone';
import './status.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import HappyIcon from '@material-ui/icons/AndroidSharp';
const Teme = createMuiTheme({ palette: { primary: { main: blue[400] } } });
/*cookie*/
const theme = createMuiTheme();
const blueTheme = createMuiTheme({ palette: { main: blue[100] } })
const buttonTheme = createMuiTheme({ palette: { background: green } })
const margin = style({
  marginLeft: theme.spacing.unit,
  width: "80%",
})

const button = style({
  marginLeft: theme.spacing.unit,
  backgroundColor: green,
})
const elete = style({
  marginLeft: 200,
})
const appbar = style({
  flexGrow: 1,
})
const typo = style({
  fontFamily: "arial",
  fontWeight: 200,
  color: grey[50],
})
let btn1 = style({
  backgroundColor: blue[400],
  color: "#FFFFFF"
})

let btn2 = style({

})
const mail = style({
  fontSize: "26px",
})
const dot = style({
  backgroundColor: "#C7F0EE",
  borderRadius: "50%",
  height: "120px",
  width: "120px",
  border: "2px solid #FC0FE8",
  borderStyle: "dotted",
})
const status_img = style({
  borderRadius: "50%",
  height: "115px",
  width: "116px",
})
const toolbar = style({
  backgroundColor: blue[400],
})
const textField = style({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  width: 200,
})
let status = style({
  paddingLeft: 20,
  fontWeight: 400
})
let Theme = createMuiTheme({ shadows: [0] });
let card = style({


})
let card1 = style({
  backgroundColor: "#ffffff",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='320' viewBox='0 0 900 600'%3E%3Cg fill-opacity='0.8'%3E%3Cpath fill='%231cff33' d='M306.9 210.2c-1.2-22.8-13.5-42.7-40.8-41.1c-18.3 1.1-35.9 3.6-47.5 20.1c-5.2 7.4-10.6 15.6-11.4 24.9c-0.5 5.8 0.2 12 1.2 17.7c9 49.6 85.3 46.7 96.4 0.2C306.6 224.9 307.3 217.4 306.9 210.2z'/%3E%3Cpath fill='%2344fc34' d='M137.2 481.3c-13.2-9.9-31.2-13.3-48.5-3.2c-12.6 7.3-19.1 17.4-21.1 28.2c-0.7 2.4-1.2 4.7-1.5 7c-8.2 35.4 33.7 78.9 72.6 48.6C167.6 539.3 164.4 501.6 137.2 481.3z'/%3E%3Cg fill='%235bf934' %3E%3Cpath d='M547.9 588.3c-7.1-34.2-61.6-52.7-87.5-16.9c-11.2 11.3-12.7 26.3-7.6 39.7c1.8 7.5 5.5 13.9 10.4 19.1c19.4 20.3 53.4 26.2 72.8 1.9C545.9 619.7 553.9 604.2 547.9 588.3z'/%3E%3Cpath d='M547.9-11.7c-7.1-34.2-61.6-52.7-87.5-16.9c-11.2 11.3-12.7 26.3-7.6 39.7c1.8 7.5 5.5 13.9 10.4 19.1c19.4 20.3 53.4 26.2 72.8 1.9C545.9 19.7 553.9 4.2 547.9-11.7z'/%3E%3C/g%3E%3Cpath fill='%236ef635' d='M849.7 498c-22.3 1.3-43.2 7.5-52.7 29.5c-3.3 7.7-7.3 15.7-7 24.3c2 55.6 86.1 63.4 98.8 10.1C890.6 554.6 877.3 496.4 849.7 498z'/%3E%3Cpath fill='%237ef335' d='M762 291.1c-8.2-6.1-19.1-1.9-27.3 2.2c-7.4 3.7-14.4 8.2-21.6 12.1c-6.6 3.6-13.7 7-19.8 11.5c-18.3 13.5-2.5 45.1 10.6 56.4c17 14.6 41.6 15.9 59.6 2.1C794.1 351.8 790.7 312.4 762 291.1z'/%3E%3Cpath fill='%238cf035' d='M863.3 170.3c-4.5-15.7-17.9-28.8-33.4-34.4c-16.2-5.8-38.4-2.9-51.8 8.1c-14.9 12.2-14.5 31.7-11.4 49c9.6 53.9 84.3 47.7 97-1.3C865.6 184.4 865.3 177.1 863.3 170.3z'/%3E%3Cpath fill='%2399ed36' d='M598.4 86.1c-10.2 15.5-9.3 34.2-0.9 50.4c2.6 5 6.2 9.5 10.4 13.2c14.2 12.6 35.5 17.1 53.2 9.5c14.3-6.1 23.9-19.8 26.7-34.7C707.4 75.6 629.7 38.5 598.4 86.1z'/%3E%3Cpath fill='%23a5ea36' d='M509.8 413.3c-17.3 22.6-11.8 59 17.5 75.3c22.6 12.6 52.2 1.7 63.8-20.9c21.4-42-9.2-85-56.5-71C523.8 399.9 515.6 405.8 509.8 413.3z'/%3E%3Cpath fill='%23b0e637' d='M607.4 232.3c-0.5-0.4-1-0.8-1.4-1.2c-16.5-12.8-30.2-22.1-50.3-8.4c-15.5 10.6-29 30.3-31.4 49.1c-4.2 33.6 30.6 46.9 58.6 40.6C619.6 304.2 640.6 259.5 607.4 232.3z'/%3E%3Cpath fill='%23bbe337' d='M410.6 95c-36.5 1.3-74.1 41.8-43.1 74.3c19.8 20.9 54.4 20.7 74.6 0.5c20.5-20.4 18.4-53.1-6.9-68.6C427.7 96.6 419.2 94.7 410.6 95z'/%3E%3Cpath fill='%23c4e038' d='M291.3 23c-0.1-0.1-0.1-0.1-0.2-0.2c-14.2-16.9-38.3-25.6-61.4-12.3c-13.5 7.8-20.5 18.7-22.7 30.2c-5.7 18 1.5 34.2 14.2 44.8c15.4 16.8 40.3 24.1 64.2 5.5c9.6-7.4 15-16.3 17.2-25.4C308.6 48.8 302.7 33.6 291.3 23z'/%3E%3Cpath fill='%23cedc38' d='M419.1 440.6c-16.9-14.5-41.8-21.5-61.7-9.5c-18.3 11.1-1 100.1 32.2 93.5c23.8-4.7 45.3-22.4 48.1-44.3C439.6 466.1 431.5 451.3 419.1 440.6z'/%3E%3Cpath fill='%23d7d939' d='M127 227c-12-4.3-25.4-2.1-38.7 11.4C71 255.9 61.4 286.1 80.4 306c21.3 22.3 86.9 27.5 89.6-14.9c0.5-8.9-2.7-17.9-6.5-25.8C155.1 248.3 142.1 232.5 127 227z'/%3E%3Cpath fill='%23dfd639' d='M281.5 407.6c-0.3-0.4-0.7-0.7-1-1c-19.3-17.6-59.1-0.6-78.1 10.3c-23.8 13.7-8.2 41.1 5.4 55.8c16.3 17.6 42.7 25.2 68 5.8C291.3 466.6 295.5 422.7 281.5 407.6z'/%3E%3Cpath fill='%23e8d23a' d='M137.9 110.2c-10.4-25.7-43.3-32.1-67-23.6C60.1 90.4 50 97.8 45.1 108.6c-21.2 47.3 44.9 81.1 78.5 51c9.5-8.5 17.3-18.9 17.4-32.4C141 120.8 139.9 115.1 137.9 110.2z'/%3E%3Cpath fill='%23f0ce3a' d='M344.3 284.7c-10 14.9-9.2 34.1-0.9 49.5c3.4 6.3 8.6 13.8 16.1 15.8c7.1 1.9 15.1 0.7 22.1-0.6c15.7-3 45.6-10.5 52.3-26.8C453.5 274.4 375.6 237.9 344.3 284.7z'/%3E%3Cg fill='%23f7cb3b' %3E%3Cpath d='M-29.2 431.8c23.4 12.4 54.1 1.7 66.1-20.6c9.6-17.8 10.4-40.4-3.3-56.5c-10.5-12.4-44.2-25.8-58.5-11.3c-3 3.1-5.1 7.1-6.9 10.9C-41.1 373.2-55 418.1-29.2 431.8z'/%3E%3Cpath d='M870.8 431.8c23.4 12.4 54.1 1.7 66.1-20.6c9.6-17.8 10.4-40.4-3.3-56.5c-10.5-12.4-44.2-25.8-58.5-11.3c-3 3.1-5.1 7.1-6.9 10.9C858.9 373.2 845 418.1 870.8 431.8z'/%3E%3C/g%3E%3Cpath fill='%23ffc73b' d='M671.4 460.5c-10.7 1.7-20.2 8.3-26.2 22.2c-21.5 49.5 45.4 84.9 79.4 53.3c16.3-15.2 24-31 6.5-48.1c-5.9-5.8-12.3-11-19.1-15.6C699.5 463.7 684.5 458.4 671.4 460.5z'/%3E%3C/g%3E%3C/svg%3E")`
})
let Status = props => {
  const [state, setState] = useState({
    url: "",
    Data: [],
    Status: "",
    fetStatus: [],
    imageUrl: ""
  })
  useEffect(() => {

    fetch('https://apicalling.herokuapp.com/feed/GetStatus', {
      method: 'POST',
      body: JSON.stringify({
        Token: localStorage.getItem('Token'),
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        setState({
          ...state,
          fetStatus: data.Status,
          url: "",
          status: ""
        })
      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    // Note how this callback is never invoked if drop occurs on the inner dropzone
    onDrop: (files) => {
      let ata;
      files.map(ex => {
        let url = URL.createObjectURL(ex);
        setState({
          ...state,
          Data: ex,
          url: "",
          status: "",
          imageUrl: url
        })
      });

    }
  });
  let logout = () => {
    localStorage.removeItem("Token");
    return <Redirect to="/" />
  }
  let drop_call = () => {
    let Data = [];

    if (acceptedFiles.length > 0) {
      acceptedFiles.map(ex => {
        Data = ex;
      });
      return <img src={state.imageUrl} className={status_img} id="image" />
    }
  }
  let formData = new FormData();
  let Token = localStorage.getItem('Token');
  formData.append('status', state.Status);
  formData.append('Token', Token);
  formData.append('image', state.Data);
  let DeletePost = (name, status) => {

    fetch('https://apicalling.herokuapp.com/feed/DeleteStatus', {
      method: 'POST',
      body: JSON.stringify({
        userName: name,
        status: status,
        Tokens: localStorage.getItem('Token')
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(de => {
        if (de.status === 200) {
          fetch('https://apicalling.herokuapp.com/feed/GetStatus', {
            method: 'POST',
            body: JSON.stringify({
              Token: localStorage.getItem('Token'),
            }),
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(res => res.json())
            .then(data => {
              console.log(data);
              setState({
                ...state,
                fetStatus: data.Status,
                url: "",
                status: ""
              })
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  let submitData = () => {
    setState({
      ...state,
      url: "",
      Status: "",
      Data: [],

    })
    document.getElementById("image").src = "";
    fetch('https://apicalling.herokuapp.com/feed/chatpost', {
      method: 'POST',
      body: formData,
    })
      .then(ef => {
        fetch('https://apicalling.herokuapp.com/feed/GetStatus', {
          method: 'POST',
          body: JSON.stringify({
            Token: localStorage.getItem('Token'),
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(res => res.json())
          .then(data => {
            console.log(data);
            setState({
              ...state,
              fetStatus: data.Status,
              url: "",
              Status: "",
              Data: []
            })
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });

  }
  let Status = (e) => {
    setState({
      ...state,
      Status: e.target.value,
    })
  }

  return (
    <div className="container">
      <MuiThemeProvider theme={Theme}>

        <AppBar>
          <Toolbar className={toolbar}>
            <Link to="/" style={{ color: "white" }}><MdKeyboardBackspace className={mail} /></Link>&nbsp;&nbsp;
            <Grid container container
              direction="row"
              justify="flex-end"
              alignItems="flex-end">
              <Button color="inherit"><FaRss />&nbsp;&nbsp;
              <Link to="/status" style={{ color: "white" }}>status</Link></Button>

              <Button color="inherit" onClick={logout}><Link to="/" style={{ color: "white" }}><FaUserAlt />&nbsp;&nbsp;Logout</Link></Button>
            </Grid>
          </Toolbar>

        </AppBar>
      </MuiThemeProvider>
      <br />
      <br />
      <br />

      <Grid container>
        <Grid item xs={12} md={12} sm={12}>
          <Card style={{
            backgroundSize: "cover",
            backgroundColor: "#E5FFEF",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%2343accc' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%2327748e' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23009dd9' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23006c9c' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23008ae2' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%230061a7' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%234972e0' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%233752a9' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%238150ce' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23643aa0' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E")`,
          }}>
            <section className="container" align="left">
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <br />
                <div className={dot}>
                  {drop_call()}
                </div>

              </div>
              <TextField
                id="standard-name"
                label="Status"
                className={textField}
                margin="normal"
                onChange={Status}
                value={state.Status}
              />
            </section>


            <Grid item xs={12} md={6}>

              <Grid container spacing={1} direction="column" alignItems="left">
                <Grid item>
                  &nbsp;&nbsp;&nbsp;&nbsp;
            <ButtonGroup>
                    <Button variant="contained"
                      color="primary" style={{
                        backgroundColor: blue[400],
                        color: "#FFFFFF"
                      }} onClick={submitData} >Submit</Button>
                    <Button variant="contained"
                      color="secondary" style={{
                        backgroundColor: pink[500],
                        color: "#FFFFFF"
                      }}>Cancel</Button>
                  </ButtonGroup>
                  <br />
                  <br />
                </Grid>
              </Grid>
            </Grid>

          </Card>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={12} md={12} sm={12}>
          {state.fetStatus.map(ed =>
            <div key={ed.fileName}>
              <br />
              <Card className={card1}>
                <List >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar src={`https://apicalling.herokuapp.com/uploads/${ed.fileName}`} alt="Remy Sharp" style={{ width: "56px", height: "56px" }} />
                    </ListItemAvatar>
                    &nbsp;
                    &nbsp;
                    &nbsp;
        <ListItemText
                      primary={ed.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                          </Typography>

                          {ed.date}
                          <br />

                          <Grid container spacing={10} direction="column" alignItems="right">
                            <form>
                              <input type="hidden" id="status" value={ed.status} />
                              <input type="hidden" id="userName" value={ed.name} />
                              <DeleteIcon className={elete} variant="contained"
                                color="primary" onClick={() => { DeletePost(ed.name, ed.status) }} />
                            </form>

                          </Grid>
                        </React.Fragment>
                      }
                    />

                  </ListItem>
                  &nbsp;&nbsp;&nbsp; <Typography variant="subtitle1" color="textPrimary" className={status}>
                    <HappyIcon variant="contained" style={{ color: "#ff0080" }}
                    />&nbsp;{ed.status}
                  </Typography>
                </List>
              </Card>
            </div>
          )}


        </Grid>
      </Grid>
    </div >

  )

}

export default Status;