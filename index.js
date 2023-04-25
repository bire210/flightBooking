const express=require("express");
const connection=require("./config/db")
const {userRouter}=require("./routes/userRoute")
const {flightRouter}=require("./routes/flightRoute")
const {dashboardRouter}=require("./routes/dashboard")
const {bookingRouter}=require("./routes/bookingRoute")
require("dotenv").config()
const port=process.env.process||8080;
const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("The Home Page");
})
app.use("/user",userRouter)
app.use("/flight",flightRouter)
app.use("/booking",bookingRouter)
app.use("/dashboard",dashboardRouter)
app.listen(port,async()=>{

    try {
        await connection;
        console.log("Database is connected");
    } catch (error) {
        console.log(`${error.message} Not Connected`)
    }
    console.log(`server is runnign over ${port}`)
})
