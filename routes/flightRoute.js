const express=require("express");
const { flightModel }=require("../models/flightModel")
const flightRouter=express.Router();

flightRouter.get("/api/flights",async(req,res)=>{
    // res.send("All flight list")
    try {
        const flight=await flightModel.find();
        res.send(flight)
    } catch (error) {
        res.send(error.message)
    }
})
flightRouter.get("/api/flights/:id",async(req,res)=>{
    try {
        const flight=await flightModel.find({"_id":req.params.id});
        res.send(flight)
    } catch (error) {
        res.send(error.message)
    }
})

flightRouter.post("/api/flights",async(req,res)=>{
try {
    const flight=new flightModel(req.body)
    const flightData= await flight.save();
    res.send(flightData)
} catch (error) {
    res.send(error.message)
}
})

flightRouter.patch("/api/flights/:id",async(req,res)=>{
    try {
        const flight=await flightModel.findOneAndDelete(req.params.id)
        res.send(res.statusCode)
    } catch (error) {
        res.send(error.message)
    }
    
})

flightRouter.delete("/api/flights/:id",async(req,res)=>{
    try {
        const flight=await flightModel.findByIdAndUpdate({"_id":req.params.id},req.body)
        res.send(res.statusCode)
    } catch (error) {
        res.send(error.message)
    }
})



module.exports={flightRouter}