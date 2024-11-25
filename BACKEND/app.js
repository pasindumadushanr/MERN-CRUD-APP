require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes/UserRoutes');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Mount routes
app.use("/", router);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://admin:lFoGV38CCQ0VAiIO@cluster0.tw6ie.mongodb.net/mern_crud";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database");
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => {
        console.log("Error connecting to database:", err);
    });
