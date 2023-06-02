const express = require("express");
const colors = require("colors");
const userRouter = require("./routes/users.routes");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);

module.exports = app;
