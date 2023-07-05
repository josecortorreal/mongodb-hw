const dotenv = require("dotenv").config();
const express = require('express');
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const db = process.env.DB_URL;
const PORT = process.env.PORT
const userRouter = require("./routes/User.js")
const thoughtRouter = require("./routes/Thought.js")

// mongoose.set("strictQuery", false)
// mongoose.set("bufferCommands", false)

// mongoose.connect(db);
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    // app.listen(PORT, () => {
    //   console.log(`Server is running on port ${PORT}`);
    // });
  })
  .catch((error) => {
    console.error('Failed to connect to the database', error);
  });

mongoose.connection.on("error", (err) => {
    console.log(err)
})

app.use(express.json());
app.use(morgan("tiny"));

app.use("/user", userRouter);
app.use("/thought", thoughtRouter);

app.listen(PORT || 8080, () => {
    console.log("Server is up");
})