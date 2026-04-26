//require("dotenv").config({path: './env'});// here we are using require instead of import because we want to load the environment variables before anything else, and using require allows us to do that without any issues with the module system.
import dotenv from "dotenv";


import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})




//if the database password contains special characters, 
// we need to encode it using encodeURIComponent() function. 
// This is because the special characters can cause issues with the connection string. 
// For example, if the password is "my@password", we need to encode it as "my%40password" in the connection string.
connectDB()























/*
import express from "express";

const app = express();


;( async () => {
   try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
    console.log("connected to db successfully")
    app.on("error", (error) => {
        console.error("error: ", error)
        throw error
    })

    app.listen(process.env.PORT, () => {
        console.log(`server is running on port ${process.env.PORT}`)
    })
    

   }catch (error) {
        console.error("error: ", error)
        throw error
   }
})()
   */