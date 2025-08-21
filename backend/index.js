import express from "express";
import dotenv from 'dotenv'
import router from "./routes/user.route.js";
import mongoose from "mongoose";
import cors from "cors";
//import 'dotenv/config'
dotenv.config() 

const app = express();
const port = process.env.PORT || 5000
app.use(express.json())//ye use karna compulsory hai
app.use(cors());

app.listen(port, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)

})


try {
    await mongoose.connect("mongodb+srv://form:form@cluster0.zct1bad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=> console.log("mongodb connected"))
} catch (error) {
    console.log(error)
}

app.use("/api/v1", router)// api/v1/formdata/   //here use app.use
// http://localhost:8000/api/v1/formdata
// http://localhost:8000/api/v1/updateuser/:id

app.get("/",(req,res)=>{
    res.send("hello aman")
})


app.get("/about",(req,res)=>{
    res.send("hello abouit")
})
