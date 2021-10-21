const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routes");
const app = express();

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
    "mongodb+srv://mehedi:24205247@work.sqy7z.mongodb.net/authentication?retryWrites=true&w=majority";
mongoose
    .connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));

app.use(router);
