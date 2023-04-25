const expres=require("express");
const { bookingModel }=require("../models/bookingModel");

const dashboardRouter=expres.Router();


dashboardRouter.get("/api/dashboard",async(req,res)=>{
    try {
        const allbooked=await bookingModel.find();
        res.send(allbooked)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports={dashboardRouter}
