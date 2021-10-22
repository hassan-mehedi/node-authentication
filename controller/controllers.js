const { json } = require("express");
const User = require("../models/User");

const login_get = (req, res) => {
    res.render("login");
};

const login_post = (req, res) => {
    res.send("Hey in the login post page");
};

const signup_get = (req, res) => {
    console.log(req.body);
    res.render("signup");
};

const signup_post = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({
            email,
            password,
        });
        res.status(201).send(user);
    } catch (err) {
        const errorMessage = errorHandler(err);
        res.status(400).json({ errorMessage });
    }
};

// handlers

const errorHandler = (err) => {
    const errorMessage = {
        email: "",
        password: "",
    };

    if (err.code === 11000) {
        errorMessage.email = "There is an account with this email";
        return errorMessage;
    }

    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach((error) => {
            const { path, message } = error.properties;
            errorMessage[path] = message;
        });
    }

    return errorMessage;
};

module.exports = {
    login_get,
    login_post,
    signup_get,
    signup_post,
};
