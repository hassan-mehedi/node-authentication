const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "You must enter an email to sign up"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "You must enter a password to sign up"],
        minLength: [8, "Your password must be at least 8 characters"],
    },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
