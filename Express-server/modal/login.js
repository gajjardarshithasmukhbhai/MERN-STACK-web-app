let getdb=require('../utility/database.js');
let bcrypt=require('bcryptjs');
module.exports=class Login{
	static Logincheck(email,password){
		
		let db=getdb.getDb();
		return db.collection("account").find({email:email})
		.toArray()
		.then(edx=>{
			return edx;
		})
		.catch(err=>{
				throw new Error("you have no account in our database");
		});
	}
}