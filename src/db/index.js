import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongo db connected !! db host: ${connectionInstance.connection.host}`);
        
        


    } catch (error) {
        console.error("mongo db connection error: ", error)
        process.exit(1)// used instead of thrrowing error because if we throw error here, it will be unhandled and will crash the server. process.exit(1) will exit the process with code 1 which indicates that there was an error.
    }
}

export default connectDB;
