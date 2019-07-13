let Signup=require('../modal/signup.js');
let getdb=require('../utility/database.js');
var validator = require('validator');
let Login=require('../modal/login.js');
let bcrypt=require('bcryptjs');
exports.getLogin=(req,res,next)=>{
    let email=req.body.email;
    let password=req.body.password;
    let array=[];
    return Login.Logincheck(email,password)
    .then(ed=>{
        array=ed;
        let hash=ed[0].password;
         return bcrypt.compare(password, hash);
    })
    .then(checkOk=>{
            
        if(checkOk)
        {
            res.status(200).json({
                message:array,
                "name":"yoyo"
            });

        }
        else{
            res.status(400).json({
                message:"nice darshit i am Not login",
            })
        }

    })
    .catch(err=>{
        res.status(510).json({
                message:err.message,
            })
        // err.statusCode=500;
        // console.log("my error",err);
    });
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
    	return sx.save()
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
		res.status(422).json({
			message:"post data not successfully",
		});
    }

	// res.status(201).json({
	// 	message:"post created successfully",
	// 	post:{email:email,password:password,retype:retype}
	// });
	res.send();
}
//rest api unexpected error occur
//aa error apada project na stage ma tyare avi jyare
//apde return karavanu bhuli jata hata<---
// ex.error avanu reason
// Login.Logincheck(email,password)
//     .then(ed=>{
//         let hash=ed[0].password;
//          return bcrypt.compare(password, hash);
//     })
//     .then(checkOk=>{
            
//         if(checkOk)
//         {
//             res.status(200).json({
//                 "message":"nice darshit i am login",
//                 "name":"yoyo"
//             });

//         }
// ex.solve error
// return Login.Logincheck(email,password)
//     .then(ed=>{
//         let hash=ed[0].password;
//          return bcrypt.compare(password, hash);
//     })
//     .then(checkOk=>{
            
//         if(checkOk)
//         {
//             res.status(200).json({
//                 "message":"nice darshit i am login",
//                 "name":"yoyo"
//             });

//         }

