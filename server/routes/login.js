import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const login = express.Router();

login.use(express.json());

login.get("/", (req, res) => {
    return res.json({ "message": "Hello from login route!" });
});

login.post("/", async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(401).send("Email not registered");

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).send("Incorrect password");
    }

    const token = generateToken(newUser._id.toString());

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "prod"
    });

    return res.status(200).send("Login successful!");
});

export default login;