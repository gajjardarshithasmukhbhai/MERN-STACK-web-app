import React from 'react';
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {style} from 'typestyle';
import {blue,grey,green} from '@material-ui/core/colors/';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Login from './login.js';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createBrowserHistory } from 'history'
import {FaUserAlt,FaRss,FaEnvelopeOpen,FaThumbsUp,FaBan} from 'react-icons/fa';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import { browserHistory } from 'react-router';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
const appbar=style({
    flexGrow: 1,
})
const typo=style({
	fontFamily:"arial",  
	fontWeight:200 ,
	color:grey[50],
})
const mail=style({
	fontSize:"26px",
})
const theme = createMuiTheme();
let Theme = createMuiTheme({shadows:[0]});

const login=style({
	marginLeft:"1020px",
	fontWeight:500,
	color:grey[100],
});
const signup=style({
	color:grey[100],
});
const toolbar=style({
    backgroundColor: blue[400],
})
const posting=style({
    width:"40%",
    postion:"absolute",
    left:"-6%",
})
const right=style({
    marginLeft:"90px",
})
class Next extends React.Component{
	constructor(props)
		{
			super(props);
			this.state={
				signin:false,
				signup:false,
			};	
			this.signin=this.signin.bind(this);
			this.signIn=this.signIn.bind(this);
			this.signUp=this.signUp.bind(this);
		}
	signin(){
		this.setState({
			signin:true,
		})
	}
	signIn=()=>{
		if(this.state.signin)
		{
			return <Redirect to='/signin' />
		}
		else if(this.state.signup)
		{
			return <Redirect to='/signUp' />
		}
	}
	signUp=()=>{
		this.setState({
			signup:true,
		})
	}
	render()
	{
		return(
				<div className={appbar}>
<Grid container>
      <Grid item xs={12} md={12} sm={12}>
<MuiThemeProvider theme={Theme}>

					<AppBar>
					

        <Toolbar className={toolbar}>
        <Button color="inherit" onClick={this.signin} variant="outlined" exact to="/signUp">
        <FaEnvelopeOpen className={mail}/>&nbsp;&nbsp;Message</Button>
 <Grid container container
  direction="row"
  justify="flex-end"
  alignItems="flex-end"> 
        <Button color="inherit"  onClick={this.signUp}><FaRss/>&nbsp;&nbsp;Feed</Button>
     
        <Button color="inherit"  onClick={this.signUp}><FaUserAlt/>&nbsp;&nbsp;Logout</Button>
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
<form>
	<div class="form-group shadow-sm p-3 mb-5 bg-white rounded">
    <input type="email" style={{height:60}}class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Status"/>
	</div>
	<button class="btn btn-primary float-left" type="submit"><FaThumbsUp/>&nbsp;&nbsp;submit</button>
	<button class="btn btn-danger float-right" type="reset"><FaBan/>&nbsp;&nbsp;cancel</button>
</form>
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
</center>
</div>

<div class="col-sm-1 col-md-2">
</div>




</div>
</center>

      </div>
			);
	}
}
export default Next;