const express=require("express");
const router=express.Router();
const controller=require('../controller/api.js');
router.post("/loginpost",controller.getLogin);
router.post("/signupost",controller.createSignup);
module.exports=router;