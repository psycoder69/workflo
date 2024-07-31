import jwt from "jsonwebtoken";

const checkNotAuthenticated = (req, res, next) => {
    const token = req.cookies.token;
};