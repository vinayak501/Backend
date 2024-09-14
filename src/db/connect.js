import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants";

const connectDB =  async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DATABASE_NAME}`)
        console.log(
          `\n MongoDB Connected !! DB : HOST : ${connectionInstance.connection.host}`
        );
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;