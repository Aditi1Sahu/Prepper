const express=require('express')
const authcontroller=require('../controllers/auth.controller')
const authmiddleware= require("../middlewares/auth.middleware")

const authRouter=express.Router()


authRouter.post("/register",authcontroller.registerusercontroller)
authRouter.post("/login",authcontroller.loginusercontroller)
authRouter.get("/logout",authcontroller.logoutusercontroller)
authRouter.get("/getme",authmiddleware.authUser,authcontroller.getmecontroller)


module.exports=authRouter