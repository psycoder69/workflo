import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../utils/jwtutils.js";

const signup = express.Router();

signup.use(express.json());

signup.get("/", (req, res) => {
    return res.json({ "message": "Hello from signup route!" });
});

signup.post("/", async (req, res) => {
    let {email, password} = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send("Email already registered");
        }

        password = bcrypt.hashSync(password, 10);

        const newUser = new User({email, password});

        await newUser.save();

        const token = generateToken(newUser._id.toString());

        return res.status(201).cookie("access_token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: true,
            secure: process.env.NODE_ENV === "prod"
        }).send("User registered successfully!");
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);

        return res.status(500).send("Server error");
    }
});

export default signup;