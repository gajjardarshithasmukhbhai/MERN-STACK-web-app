import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { Redirect, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { style } from 'typestyle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';
import blue from 'material-ui/colors/blue';
import Button from '@material-ui/core/Button';
import '../css/login.css';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';

const theme = createMuiTheme();
// note:
// always createMuiTheme() e configuration che check krva console.log(theme) kari ne tamari exctly te object che eni value
// change kari nakhvi
// jyare configuration karya pachi e theme ne apply te MuiThemeProvider
// ma te thay che
console.log(theme);
const blueTheme = createMuiTheme({ palette: { main: blue[100] } })
const buttonTheme = createMuiTheme({ palette: { main: green } })


const margin = style({
  marginLeft: theme.spacing.unit,
  width: "80%",
})
const button = style({
  marginLeft: theme.spacing.unit,
  backgroundColor: green,
})



let SignupCard = () => {

  let [state, setState] = useState({
    email: "",
    password: "",
    retype: "",
    open: false,
    err: "",
    redirect: false,
    aftersign: false,
    otp: false,
    otpnumber: "",
    button: 0,
    passwordCheck: false,
    open: false,
    Transition: Fade,
    snackbarTitle: ""
  })
  let email = (k) => {
    let email = k.target.value;
    setState({
      ...state,
      email: email,
    })
  }
  let password = (j) => {
    let password = j.target.value;
    setState({
      ...state,
      password: password,
    })
  }
  let retype = (l) => {
    let retype = l.target.value;
    setState({
      ...state,
      retype: retype,
    })
  }
  let closedialog = () => {
    setState({
      ...state,
      open: false,
    })
  }
  let aftersign = () => {
    if (state.aftersign) {
      return <Redirect to="/aftersign" />
    }
  }
  let direct = () => {
    if (state.redirect) {
      return <Redirect to="/aftersign" />
    }
  }
  let Otp = (e) => {
    if ((e.target.value > -1) && (e.target.value.length < 5)) {
      setState({
        ...state,
        otpnumber: e.target.value,
      })
    }
    else {
      setState({
        ...state,
        otpnumber: "",
      })
    }
  }
  let Submit = () => {
    if ((state.password === state.retype) && (state.password.length > 5)) {
      fetch('http://apicalling.herokuapp.com/feed/enterSignup', {
        method: 'POST',
        body: JSON.stringify({
          otp: state.otpnumber,
          email: state.email,
          password: state.password,
          retype: state.retype
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      })
        .then(res => {
          if (res.status === 200) {
            setState({
              ...state,
              otp: false,
              redirect: true,
              aftersign: true
            })
            return res.json();

          }
          else if (res.status === 302) {
            console.log("12");

            setState({
              ...state,
              open: true,
              snackbarTitle: "you password is not match"
            })
          }
          else if (res.status === 502) {
            console.log("13");
            setState({
              ...state,
              open: true,
              snackbarTitle: "otp is wrong"
            })
          }
        })
        .then(resData => {
          localStorage.setItem('Token', resData.token);
        })
        .catch(err => {
          console.log(err);
        });

    }
    else {
      setState({
        ...state,
        open: true,
        snackbarTitle: "sir your password is mismatch and enter 6 digit above password",
      })
    }
  }
  let submit = () => {

    fetch('http://apicalling.herokuapp.com/feed/UserOtp', {
      method: 'POST',
      body: JSON.stringify({
        email: state.email,
        otp: state.otpnumber,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then(res => {
        if (res.status === 200) {
          setState({
            ...state,
            passwordCheck: true,
            otp: false,
            button: 2
          })
        }
        else {
          setState({
            ...state,
            open: true,
            snackbarTitle: "your otp is not match sending email"
          })
        }
      })

      .catch(err => {
        console.log(err);
      });

  }
  // let handleclose=()=>{
  //   setState({...state,
  //       open:false,
  //   })
  // }
  let passwordIntegrate = () => {
    if (state.passwordCheck) {
      return (<div>
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
        <br />
        <br />
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
      </div>)
    }
  }
  let buttonCall = () => {
    if (state.button === 0) {

      return (<div>
        {direct()}
        <Button variant="contained" style={{
          backgroundColor: "#0099ff",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3CradialGradient id='a' cx='800' cy='371' r='70%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230099ff'/%3E%3Cstop offset='1' stop-color='%2304C'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='800' cy='371' r='60%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230EF' stop-opacity='1'/%3E%3Cstop offset='1' stop-color='%230EF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1600' height='900'/%3E%3Cg fill='none' stroke='%2303E' stroke-width='10' stroke-miterlimit='10' stroke-opacity='.5'%3E%3Cpolygon points='2277.4 1152 800-1407-677.4 1152'/%3E%3Cpolygon points='800-1372.9-648.8 1136.5 2248.8 1136.5'/%3E%3Cpolygon points='800-1338.8-620.2 1121.1 2220.2 1121.1'/%3E%3Cpolygon points='800-1304.7-591.6 1105.6 2191.6 1105.6'/%3E%3Cpolygon points='800-1270.6-563 1090.2 2163 1090.2'/%3E%3Cpolygon points='800-1236.5-534.4 1074.7 2134.4 1074.7'/%3E%3Cpolygon points='800-1202.4-505.8 1059.3 2105.8 1059.3'/%3E%3Cpolygon points='800-1168.3-477.2 1043.8 2077.2 1043.8'/%3E%3Cpolygon points='800-1134.2-448.6 1028.4 2048.6 1028.4'/%3E%3Cpolygon points='800-1100.1-420 1012.9 2020 1012.9'/%3E%3Cpolygon points='800-1066-391.4 997.5 1991.4 997.5'/%3E%3Cpolygon points='800-1031.9-362.7 982 1962.7 982'/%3E%3Cpolygon points='800-997.8-334.1 966.6 1934.1 966.6'/%3E%3Cpolygon points='800-963.7-305.5 951.1 1905.5 951.1'/%3E%3Cpolygon points='800-929.6-276.9 935.7 1876.9 935.7'/%3E%3Cpolygon points='800-895.5-248.3 920.2 1848.3 920.2'/%3E%3Cpolygon points='800-861.4-219.7 904.7 1819.7 904.7'/%3E%3Cpolygon points='800-827.3-191.1 889.3 1791.1 889.3'/%3E%3Cpolygon points='800-793.2-162.5 873.8 1762.5 873.8'/%3E%3Cpolygon points='800-759.1-133.9 858.4 1733.9 858.4'/%3E%3Cpolygon points='800-725-105.3 842.9 1705.3 842.9'/%3E%3Cpolygon points='800-690.9-76.7 827.5 1676.7 827.5'/%3E%3Cpolygon points='800-656.8-48.1 812 1648.1 812'/%3E%3Cpolygon points='800-622.7-19.4 796.6 1619.4 796.6'/%3E%3Cpolygon points='800-588.6 9.2 781.1 1590.8 781.1'/%3E%3Cpolygon points='800-554.5 37.8 765.7 1562.2 765.7'/%3E%3Cpolygon points='800-520.5 66.4 750.2 1533.6 750.2'/%3E%3Cpolygon points='800-486.4 95 734.8 1505 734.8'/%3E%3Cpolygon points='800-452.3 123.6 719.3 1476.4 719.3'/%3E%3Cpolygon points='800-418.2 152.2 703.9 1447.8 703.9'/%3E%3Cpolygon points='800-384.1 180.8 688.4 1419.2 688.4'/%3E%3Cpolygon points='800-350 209.4 673 1390.6 673'/%3E%3Cpolygon points='800-315.9 238 657.5 1362 657.5'/%3E%3Cpolygon points='800-281.8 266.6 642 1333.4 642'/%3E%3Cpolygon points='800-247.7 295.2 626.6 1304.8 626.6'/%3E%3Cpolygon points='800-213.6 323.9 611.1 1276.1 611.1'/%3E%3Cpolygon points='800-179.5 352.5 595.7 1247.5 595.7'/%3E%3Cpolygon points='800-145.4 381.1 580.2 1218.9 580.2'/%3E%3Cpolygon points='800-111.3 409.7 564.8 1190.3 564.8'/%3E%3Cpolygon points='800-77.2 438.3 549.3 1161.7 549.3'/%3E%3Cpolygon points='800-43.1 466.9 533.9 1133.1 533.9'/%3E%3Cpolygon points='800-9 495.5 518.4 1104.5 518.4'/%3E%3Cpolygon points='800 25.1 524.1 503 1075.9 503'/%3E%3Cpolygon points='800 59.2 552.7 487.5 1047.3 487.5'/%3E%3Cpolygon points='800 93.3 581.3 472.1 1018.7 472.1'/%3E%3Cpolygon points='800 127.4 609.9 456.6 990.1 456.6'/%3E%3Cpolygon points='800 161.5 638.5 441.2 961.5 441.2'/%3E%3Cpolygon points='800 195.6 667.2 425.7 932.8 425.7'/%3E%3Cpolygon points='800 229.7 695.8 410.2 904.2 410.2'/%3E%3Cpolygon points='800 263.8 724.4 394.8 875.6 394.8'/%3E%3Cpolygon points='800 297.9 753 379.3 847 379.3'/%3E%3Cpolygon points='800 332 781.6 363.9 818.4 363.9'/%3E%3C/g%3E%3Crect fill-opacity='.5' fill='url(%23b)' width='1600' height='900'/%3E%3C/svg%3E")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          color: "white"

        }} size='medium' onClick={submitData}>
          Verify
        </Button>
        &nbsp;
        <Button variant="contained" color="secondary" >
          cancel
        </Button>
      </div>)
    }
    else if (state.button === 1) {
      return (<div>
        <Button variant="contained" style={{
          backgroundColor: "#483baa",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%23faffff' stroke-width='1' stroke-opacity='0.2'%3E%3Crect x='-40' y='40' width='75' height='75'/%3E%3Crect x='-35' y='45' width='65' height='65'/%3E%3Crect x='-30' y='50' width='55' height='55'/%3E%3Crect x='-25' y='55' width='45' height='45'/%3E%3Crect x='-20' y='60' width='35' height='35'/%3E%3Crect x='-15' y='65' width='25' height='25'/%3E%3Crect x='-10' y='70' width='15' height='15'/%3E%3Crect x='-5' y='75' width='5' height='5'/%3E%3Crect width='35' height='35'/%3E%3Crect x='5' y='5' width='25' height='25'/%3E%3Crect x='10' y='10' width='15' height='15'/%3E%3Crect x='15' y='15' width='5' height='5'/%3E%3Crect x='40' width='75' height='75'/%3E%3Crect x='45' y='5' width='65' height='65'/%3E%3Crect x='50' y='10' width='55' height='55'/%3E%3Crect x='55' y='15' width='45' height='45'/%3E%3Crect x='60' y='20' width='35' height='35'/%3E%3Crect x='65' y='25' width='25' height='25'/%3E%3Crect x='70' y='30' width='15' height='15'/%3E%3Crect x='75' y='35' width='5' height='5'/%3E%3Crect x='40' y='80' width='35' height='35'/%3E%3Crect x='45' y='85' width='25' height='25'/%3E%3Crect x='50' y='90' width='15' height='15'/%3E%3Crect x='55' y='95' width='5' height='5'/%3E%3Crect x='120' y='-40' width='75' height='75'/%3E%3Crect x='125' y='-35' width='65' height='65'/%3E%3Crect x='130' y='-30' width='55' height='55'/%3E%3Crect x='135' y='-25' width='45' height='45'/%3E%3Crect x='140' y='-20' width='35' height='35'/%3E%3Crect x='145' y='-15' width='25' height='25'/%3E%3Crect x='150' y='-10' width='15' height='15'/%3E%3Crect x='155' y='-5' width='5' height='5'/%3E%3Crect x='120' y='40' width='35' height='35'/%3E%3Crect x='125' y='45' width='25' height='25'/%3E%3Crect x='130' y='50' width='15' height='15'/%3E%3Crect x='135' y='55' width='5' height='5'/%3E%3Crect y='120' width='75' height='75'/%3E%3Crect x='5' y='125' width='65' height='65'/%3E%3Crect x='10' y='130' width='55' height='55'/%3E%3Crect x='15' y='135' width='45' height='45'/%3E%3Crect x='20' y='140' width='35' height='35'/%3E%3Crect x='25' y='145' width='25' height='25'/%3E%3Crect x='30' y='150' width='15' height='15'/%3E%3Crect x='35' y='155' width='5' height='5'/%3E%3Crect x='200' y='120' width='75' height='75'/%3E%3Crect x='40' y='200' width='75' height='75'/%3E%3Crect x='80' y='80' width='75' height='75'/%3E%3Crect x='85' y='85' width='65' height='65'/%3E%3Crect x='90' y='90' width='55' height='55'/%3E%3Crect x='95' y='95' width='45' height='45'/%3E%3Crect x='100' y='100' width='35' height='35'/%3E%3Crect x='105' y='105' width='25' height='25'/%3E%3Crect x='110' y='110' width='15' height='15'/%3E%3Crect x='115' y='115' width='5' height='5'/%3E%3Crect x='80' y='160' width='35' height='35'/%3E%3Crect x='85' y='165' width='25' height='25'/%3E%3Crect x='90' y='170' width='15' height='15'/%3E%3Crect x='95' y='175' width='5' height='5'/%3E%3Crect x='120' y='160' width='75' height='75'/%3E%3Crect x='125' y='165' width='65' height='65'/%3E%3Crect x='130' y='170' width='55' height='55'/%3E%3Crect x='135' y='175' width='45' height='45'/%3E%3Crect x='140' y='180' width='35' height='35'/%3E%3Crect x='145' y='185' width='25' height='25'/%3E%3Crect x='150' y='190' width='15' height='15'/%3E%3Crect x='155' y='195' width='5' height='5'/%3E%3Crect x='160' y='40' width='75' height='75'/%3E%3Crect x='165' y='45' width='65' height='65'/%3E%3Crect x='170' y='50' width='55' height='55'/%3E%3Crect x='175' y='55' width='45' height='45'/%3E%3Crect x='180' y='60' width='35' height='35'/%3E%3Crect x='185' y='65' width='25' height='25'/%3E%3Crect x='190' y='70' width='15' height='15'/%3E%3Crect x='195' y='75' width='5' height='5'/%3E%3Crect x='160' y='120' width='35' height='35'/%3E%3Crect x='165' y='125' width='25' height='25'/%3E%3Crect x='170' y='130' width='15' height='15'/%3E%3Crect x='175' y='135' width='5' height='5'/%3E%3Crect x='200' y='200' width='35' height='35'/%3E%3Crect x='200' width='35' height='35'/%3E%3Crect y='200' width='35' height='35'/%3E%3C/g%3E%3C/svg%3E")`,
          color: "white",
        }} size='medium' onClick={submit}>
          submit
        </Button>
        &nbsp;
        <Button variant="contained" color="secondary" >
          cancel
        </Button>

      </div>)
    }
    else {
      return (<div>

        <Button variant="contained" style={{
          backgroundColor: "#ee5522",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23ca481d' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E")`,
          color: "white",
        }} size='medium' onClick={Submit}>
          Submit
        </Button>
        &nbsp;
        <Button variant="contained" color="secondary" >
          cancel
        </Button>
      </div>)
    }

  }
  let otpVerification = () => {
    if (state.otp) {

      return (<div>
        <TextField
          className={margin}
          hintText="Enter your email-id"
          label="Otp number"
          onChange={Otp}
          value={state.otpnumber}
          floatingLabelText="E-mail Id"
          id="mui-theme-provider-outlined-input"
        />
        <Typography variant="button" display="block" gutterBottom>
          <br />
          <br />
          <spam style={{ color: "red", fontWeight: 600 }}
          >*Note : </spam><spam style={{ color: "green" }}>our team send 4 Digit otp on your email id checkout if email is not arrive
        then check spam folder</spam>
        </Typography>
      </div>)
    }
  }
  let submitData = () => {
    setState({
      ...state,
      otp: true,
      button: 1
    })

    fetch('http://apicalling.herokuapp.com/feed/otp', {
      method: 'POST',
      body: JSON.stringify({
        email: state.email,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div class="container">
      <Grid container>
        <Grid item xs={12} md={12} sm={12} xs={12}>

          <center>

            <div class="col-sm-12">

              <Box boxShadow={2}>
                <Card style={{
                  backgroundColor: "#ffffff",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='600' viewBox='0 0 900 600'%3E%3Cg fill-opacity='0.98'%3E%3Cpath fill='%236bc6f3' d='M306.9 210.2c-1.2-22.8-13.5-42.7-40.8-41.1c-18.3 1.1-35.9 3.6-47.5 20.1c-5.2 7.4-10.6 15.6-11.4 24.9c-0.5 5.8 0.2 12 1.2 17.7c9 49.6 85.3 46.7 96.4 0.2C306.6 224.9 307.3 217.4 306.9 210.2z'/%3E%3Cpath fill='%2370b2f4' d='M137.2 481.3c-13.2-9.9-31.2-13.3-48.5-3.2c-12.6 7.3-19.1 17.4-21.1 28.2c-0.7 2.4-1.2 4.7-1.5 7c-8.2 35.4 33.7 78.9 72.6 48.6C167.6 539.3 164.4 501.6 137.2 481.3z'/%3E%3Cg fill='%23769ff5' %3E%3Cpath d='M547.9 588.3c-7.1-34.2-61.6-52.7-87.5-16.9c-11.2 11.3-12.7 26.3-7.6 39.7c1.8 7.5 5.5 13.9 10.4 19.1c19.4 20.3 53.4 26.2 72.8 1.9C545.9 619.7 553.9 604.2 547.9 588.3z'/%3E%3Cpath d='M547.9-11.7c-7.1-34.2-61.6-52.7-87.5-16.9c-11.2 11.3-12.7 26.3-7.6 39.7c1.8 7.5 5.5 13.9 10.4 19.1c19.4 20.3 53.4 26.2 72.8 1.9C545.9 19.7 553.9 4.2 547.9-11.7z'/%3E%3C/g%3E%3Cpath fill='%237b8ef6' d='M849.7 498c-22.3 1.3-43.2 7.5-52.7 29.5c-3.3 7.7-7.3 15.7-7 24.3c2 55.6 86.1 63.4 98.8 10.1C890.6 554.6 877.3 496.4 849.7 498z'/%3E%3Cpath fill='%238481f7' d='M762 291.1c-8.2-6.1-19.1-1.9-27.3 2.2c-7.4 3.7-14.4 8.2-21.6 12.1c-6.6 3.6-13.7 7-19.8 11.5c-18.3 13.5-2.5 45.1 10.6 56.4c17 14.6 41.6 15.9 59.6 2.1C794.1 351.8 790.7 312.4 762 291.1z'/%3E%3Cpath fill='%239d87f8' d='M863.3 170.3c-4.5-15.7-17.9-28.8-33.4-34.4c-16.2-5.8-38.4-2.9-51.8 8.1c-14.9 12.2-14.5 31.7-11.4 49c9.6 53.9 84.3 47.7 97-1.3C865.6 184.4 865.3 177.1 863.3 170.3z'/%3E%3Cpath fill='%23b48cf9' d='M598.4 86.1c-10.2 15.5-9.3 34.2-0.9 50.4c2.6 5 6.2 9.5 10.4 13.2c14.2 12.6 35.5 17.1 53.2 9.5c14.3-6.1 23.9-19.8 26.7-34.7C707.4 75.6 629.7 38.5 598.4 86.1z'/%3E%3Cpath fill='%23ca92fa' d='M509.8 413.3c-17.3 22.6-11.8 59 17.5 75.3c22.6 12.6 52.2 1.7 63.8-20.9c21.4-42-9.2-85-56.5-71C523.8 399.9 515.6 405.8 509.8 413.3z'/%3E%3Cpath fill='%23df98fb' d='M607.4 232.3c-0.5-0.4-1-0.8-1.4-1.2c-16.5-12.8-30.2-22.1-50.3-8.4c-15.5 10.6-29 30.3-31.4 49.1c-4.2 33.6 30.6 46.9 58.6 40.6C619.6 304.2 640.6 259.5 607.4 232.3z'/%3E%3Cpath fill='%23f19efb' d='M410.6 95c-36.5 1.3-74.1 41.8-43.1 74.3c19.8 20.9 54.4 20.7 74.6 0.5c20.5-20.4 18.4-53.1-6.9-68.6C427.7 96.6 419.2 94.7 410.6 95z'/%3E%3Cpath fill='%23fca4f7' d='M291.3 23c-0.1-0.1-0.1-0.1-0.2-0.2c-14.2-16.9-38.3-25.6-61.4-12.3c-13.5 7.8-20.5 18.7-22.7 30.2c-5.7 18 1.5 34.2 14.2 44.8c15.4 16.8 40.3 24.1 64.2 5.5c9.6-7.4 15-16.3 17.2-25.4C308.6 48.8 302.7 33.6 291.3 23z'/%3E%3Cpath fill='%23fdaae9' d='M419.1 440.6c-16.9-14.5-41.8-21.5-61.7-9.5c-18.3 11.1-1 100.1 32.2 93.5c23.8-4.7 45.3-22.4 48.1-44.3C439.6 466.1 431.5 451.3 419.1 440.6z'/%3E%3Cpath fill='%23fdb0de' d='M127 227c-12-4.3-25.4-2.1-38.7 11.4C71 255.9 61.4 286.1 80.4 306c21.3 22.3 86.9 27.5 89.6-14.9c0.5-8.9-2.7-17.9-6.5-25.8C155.1 248.3 142.1 232.5 127 227z'/%3E%3Cpath fill='%23feb6d4' d='M281.5 407.6c-0.3-0.4-0.7-0.7-1-1c-19.3-17.6-59.1-0.6-78.1 10.3c-23.8 13.7-8.2 41.1 5.4 55.8c16.3 17.6 42.7 25.2 68 5.8C291.3 466.6 295.5 422.7 281.5 407.6z'/%3E%3Cpath fill='%23febccc' d='M137.9 110.2c-10.4-25.7-43.3-32.1-67-23.6C60.1 90.4 50 97.8 45.1 108.6c-21.2 47.3 44.9 81.1 78.5 51c9.5-8.5 17.3-18.9 17.4-32.4C141 120.8 139.9 115.1 137.9 110.2z'/%3E%3Cpath fill='%23fec2c7' d='M344.3 284.7c-10 14.9-9.2 34.1-0.9 49.5c3.4 6.3 8.6 13.8 16.1 15.8c7.1 1.9 15.1 0.7 22.1-0.6c15.7-3 45.6-10.5 52.3-26.8C453.5 274.4 375.6 237.9 344.3 284.7z'/%3E%3Cg fill='%23ffcec9' %3E%3Cpath d='M-29.2 431.8c23.4 12.4 54.1 1.7 66.1-20.6c9.6-17.8 10.4-40.4-3.3-56.5c-10.5-12.4-44.2-25.8-58.5-11.3c-3 3.1-5.1 7.1-6.9 10.9C-41.1 373.2-55 418.1-29.2 431.8z'/%3E%3Cpath d='M870.8 431.8c23.4 12.4 54.1 1.7 66.1-20.6c9.6-17.8 10.4-40.4-3.3-56.5c-10.5-12.4-44.2-25.8-58.5-11.3c-3 3.1-5.1 7.1-6.9 10.9C858.9 373.2 845 418.1 870.8 431.8z'/%3E%3C/g%3E%3Cpath fill='%23ffdccf' d='M671.4 460.5c-10.7 1.7-20.2 8.3-26.2 22.2c-21.5 49.5 45.4 84.9 79.4 53.3c16.3-15.2 24-31 6.5-48.1c-5.9-5.8-12.3-11-19.1-15.6C699.5 463.7 684.5 458.4 671.4 460.5z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundAttachment: "fixed",
                  backgroundSize: "cover"
                }} color="primary">
                  <CardContent>
                    <MuiThemeProvider theme={blueTheme}>
                      <Box color="primary.main">
                        <Typography variant="h5" component="h2" gutterBottom>
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

                        {otpVerification()}
                        {passwordIntegrate()}

                      </ThemeProvider>
                      <br />
                      <br />


                      <Box position="absolute"
                        left="13%"
                        zIndex="modal" height="65%">
                        {buttonCall()}
                      </Box>

                      <Grid container>
                        <Grid item xs={12} sm={12} >
                          <Box position="absolute" top={360}
                            left="13%"
                            zIndex="modal" justify="center" height="65%">

                          </Box>
                        </Grid>
                      </Grid>
                      <br />
                      <br />
                    </form>

                  </CardContent>
                </Card>

              </Box>


            </div>

          </center>

        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={state.open}
        onClose={() => {
          setState({
            ...state,
            open: false,
          })
        }}
        autoHideDuration={3000}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id" style={{ color: "#2FE1CA" }}>{state.snackbarTitle}</span>}
      />

      {aftersign()}
    </div>

  )

}

export default SignupCard;