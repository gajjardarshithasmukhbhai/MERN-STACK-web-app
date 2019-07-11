let express=require("express");
let app=express();
let body=require("body-parser");
let session=require("express-session");
let MongoDBStore=require('connect-mongodb-session')(session);
let router=require('./router/router.js');
let mongoConnect=require('./utility/database.js').mongoConnect;
app.use(body.json());
app.use((req,res,next)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods','OPTIONS,GET,POST,DELETE,PUT');
	res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
	next();
});
var store = new MongoDBStore({
  uri: 'mongodb+srv://mernstack:Zxcvbnm@12345)@cluster0-mqmu9.mongodb.net/test?retryWrites=true&w=majority',
  collection: 'mySessions',
});
app.use(session({
	secret:'Gajjar darshit Hasmukhbhai',/*any text given sigin time e hash code ma hash code rupe cookie ma te store te thase production ma long string hovi joie*/
	resave:false,/*aa em batave upcoming req ma te session te save thato nathi*/
	saveUninitialized:false,/*the session cookie will not be set on the browser unless the session is modified.*/
	store:store,
}));
app.use("/feed",router);
mongoConnect(()=>{
	app.listen(7080,()=>{
		console.log("I Am Call For API call");
	});	
});

