import express from "express"
import dotenv from 'dotenv'
import connectdb from "./src/config/db.js";
dotenv.config();


const app = express();

const PORT = process.env.PORT;

app.get('/api',(req,res)=>{
    res.send("This is the Get Request called");
})

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
    connectdb();
})