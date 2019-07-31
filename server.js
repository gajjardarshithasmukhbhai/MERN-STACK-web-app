const express=require("express");
const path=require("path");
const app=express();
if(process.env.NODE_ENV==='production')
{
	app.use(express.static(path.join(__dirname,'/build')));
	app.get('*',(req,res,next)=>{
		res.sendFile(path.join(__dirname + '/build/index.html'));
	});
}
//hello gajjar  darshit kem cho i am productin ready web app
const port=process.env.PORT || 3002;
app.listen(port,()=>{
	console.log("port",port);
});