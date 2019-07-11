let getdb=require('../utility/database.js');
let bcrypt=require('bcryptjs');
module.exports=class Signup{
	constructor(email,password,retype)
	{
		this.email=email;
		this.password=password;
		this.retype=retype;
	}
	save()
	{
		if(this.password===this.retype)
		{
				let hashPassword;
		return bcrypt.hash(this.password,12)
		.then(pass=>{
			hashPassword=pass;
			let db=getdb.getDb();
			return db.collection('account').
			insertOne({email:this.email,password:hashPassword})
				.then(ew=>{
					return ew;
				})
				.catch(error=>{
					return error;
				});
			})
			.catch(err=>{
				console.log(err.statusCode);
			});
		}
	}
}