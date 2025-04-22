import express from "express"
import dotenv from 'dotenv'
import connectdb from "./src/config/db.js";
import userRoutes from './src/routes/userRoutes.js'
dotenv.config();


const app = express();

// 🛡️ Middleware to parse JSON bodies
app.use(express.json());

// 🛡️ Middleware to parse URL-encoded data (from forms etc.)
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use('/',userRoutes);

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
    connectdb();
})