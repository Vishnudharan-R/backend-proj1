import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';



const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));//middleware for cross origin resource sharing


app.use(express.json({
    limit: "16kb"
}));//middleware for parsing json data in request body

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"));//middleware for serving static files from public directory

app.use(cookieParser());//middleware for parsing cookies in request header

export { app };

