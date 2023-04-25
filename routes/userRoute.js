const express=require("express");
const {userModel}=require("../models/userModel")
const bcrypt=require("bcrypt")
const userRouter=express.Router();
const jwt=require("jsonwebtoken")
userRouter.get("/",async(req,res)=>{
    res.send("all user Data")
})


userRouter.post("/api/register",async(req,res)=>{
console.log(req.body)
  const {name,email,password}=req.body;
  try {
    bcrypt.hash(password,5,async(err,hash)=>{
      if(err){
        res.send("Somehting is wrong")
      }else{
        const user=new userModel({name,email,password:hash});
        const userData=await user.save();
        res.send("Regitered")
      }
    })
   
  } catch (error) {
    res.send(error.message)
  }
   
})

userRouter.post("/api/login",async(req,res)=>{
    //res.send("login")

    const {email,password}=req.body;
    try {
      
      const user=await userModel.find({email});
      const hash_passsword=user[0].password;
      if(user.length>0){
       bcrypt.compare(password,hash_passsword,(error,result)=>{
        if(result){
          const token=jwt.sign({userId:user[0]._id},"MASAI_KEY");
          res.send({mas:"Login sucess","token":token,"user":user[0]});
        }else{
         res.send("Wrong Pasword")
        }
       })
      }else{
        res.send("User does not exist")
      }
    } catch (error) {
      
    }
})


module.exports={userRouter}