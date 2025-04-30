import express from "express"
import dotenv from 'dotenv'
import connectdb from "./src/config/db.js";
import apiRoutes from './src/routes/apiRoutes.js'
import cors from 'cors'
dotenv.config();


const app = express();


// 🛡️ Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// 🛡️ Middleware to parse URL-encoded data (from forms etc.)
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use('/api',apiRoutes);

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
    connectdb();
})