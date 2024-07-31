import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import apiRouter from "./routes/api.js";
import connectDatabase from "./connections/database.js";

const app = express();

dotenv.config();

const host = process.env.HOST || `127.0.0.1`;
const port = Number.parseInt(process.env.PORT || `8080`);

connectDatabase(process.env.DATABASE_URI);

const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) callback(null, true);
        else callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}/`);
});