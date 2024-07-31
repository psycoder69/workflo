import express from "express";
import signupRouter from "./signup.js";
import loginRouter from "./login.js";

const api = express.Router();

api.use(express.json());

api.use("/signup", signupRouter);
api.use("/login", loginRouter);

export default api;