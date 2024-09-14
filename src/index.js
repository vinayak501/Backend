import connectDB from "./db/connect";
import dotenv from 'dotenv';

dotenv.config();
import express from "express";
const app = express();

connectDB();

/*
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DATABASE_NAME}`);
        app.on('error',(err)=>{
            console.log("ERROR : can't talk with express app");
            throw err;  
        })
        app.listen(3000,()=>{
            console.log(`server listening on ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log("ERROR : " ,error);  
    }
})()
*/

