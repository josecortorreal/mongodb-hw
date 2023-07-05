const dotenv = require("dotenv").config();
const express = require('express');
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const db = process.env.DB_URL;
const PORT = process.env.PORT

mongoose.connect(db);
mongoose.connection.on("error", (err) => {
    console.log(err)
})

app.use(express.json());
app.use(morgan("tiny"));

app.listen(PORT || 8080, () => {
    console.log("Server is up")
})