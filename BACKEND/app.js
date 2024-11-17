const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use("/", (req, res) => {
    res.send("It is working");
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:lFoGV38CCQ0VAiIO@cluster0.tw6ie.mongodb.net/")
    .then(() => {
        console.log("Connected to database");
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => {
        console.log(err);
    });
//lFoGV38CCQ0VAiIO