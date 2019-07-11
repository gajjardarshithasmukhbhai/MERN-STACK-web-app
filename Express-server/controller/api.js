let Signup=require('../modal/signup.js');
let getdb=require('../utility/database.js');
var validator = require('validator');
exports.getLogin=(req,res,next)=>{
    let email=req.body.email;
    let password=req.body.password;
    console.log(email,password);
	res.end();
}
exports.createSignup=(req,res,next)=>{
	let email=req.body.email;
    let password=req.body.password;
    let retype=req.body.retype;
    let verifyemail=validator.isEmail(email);
    if((password.length>6&&(password===retype)&&verifyemail))
    {
    	console.log("i am ok darshit");
    	let sx=new Signup(email,password,retype);
    	sx.save()
    	.then(xs=>{
    		res.status(201).json({
	        message: 'Post created successfully!',
	      });
    	})
    	.catch(err=>{
    		console.log("my erro",err.message);
    	});
    }
    else{
    	console.log("i am not ok darshit");
	
		return res.status(422).json({
			message:"post data not successfully",
		});
    }

	// res.status(201).json({
	// 	message:"post created successfully",
	// 	post:{email:email,password:password,retype:retype}
	// });
	res.end();
}