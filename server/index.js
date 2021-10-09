const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser: true
});

const userSchema = {
    email: String,
    password: String
};

const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
    res.send("Welcome to college aid");
});

app.get("/register", function (req, res) {
    res.sendFile(__dirname + "/public/register.html");
});

app.post("/register", function (req, res) {

    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const newUser = new User({
            email: req.body.email,
            password: hash
        });

        User.findOne({
            email: newUser.email
        }, function (err, foundUser) {
            if (err) {
                console.log(err);
            } else {
                if (foundUser) {
                    res.send("User already exists");
                } else {
                    newUser.save(function (err) {
                        if (err) console.log(err);
                        else res.send("Registered successfully");
                    });
                }
            }
        });
    });


});

app.get("/login", function (req, res) {
    res.send("login");

});

app.post("/login", function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
        email: email
    }, function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, function (err, result) {
                    if (result === true) {
                        res.send("Logged in successfully");
                    } else {
                        res.send("Wrong password");
                    }
                });
            }
        }
    });
});

app.listen(3000, function (req, res) {
    console.log("Server is listening on port 3000");
});