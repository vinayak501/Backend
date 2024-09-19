import connectDB from "./db/connect.js";
import dotenv from 'dotenv';
import { app } from "./app.js";

dotenv.config();
import express from "express";


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server Listening on ${process.env.PORT}`);
    })
    app.on('error',(err)=>{
        console.error("app.on : ",err);
    })
})
.catch((err) => {
    console.log(`ERROR : ${err}`);
});

/*
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DATABASE_NAME}`);
        app.on('error',(err)=>{
            console.log("ERROR : can't talk with express app");
        })
        app.listen(3000,()=>{
            console.log(`server listening on ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log("ERROR : " ,error);  
    }
})()
*/

