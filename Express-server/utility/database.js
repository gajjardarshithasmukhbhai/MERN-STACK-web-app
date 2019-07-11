let mongodb=require("mongodb");
let MongoClient=mongodb.MongoClient;
let _db;
let mongoConnect=(callback)=>{
	MongoClient.connect("mongodb+srv://mernstack:Zxcvbnm@12345)@cluster0-mqmu9.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true})
	.then(client=>{
		console.log("connected");
		_db=client.db();
		callback();
	})
	.catch(err=>{
		console.log("darshit gajjar error occur",err);
	});
}
let getDb=()=>{
	if(_db)
	{
		return _db;
	}
	throw 'database is not Found sorry cismox owner';//otherwise error occur te thase
}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;