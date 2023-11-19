require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    sucess: 1,
    message: "Welcome to the santander coders - todo list API",
  });
});

app.listen(process.env.APP_PORT, () => {
  console.log("Server running on port : ", process.env.APP_PORT);
});
