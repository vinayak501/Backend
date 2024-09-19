import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();    
import { DATABASE_NAME } from "../constants.js";

const connectDB =  async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log(
          `\n MongoDB Connected !! DB : HOST : ${connectionInstance.connection.host}`
        );
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;