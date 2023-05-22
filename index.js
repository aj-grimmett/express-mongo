const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Product = require("./models/product");
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")

  .then(() => {
    console.log("CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log(" OH NO ERR !!!");
    console.log(err);
  });
app.set("views", path.join(__dirname, "views"));
app.set("vies engine", "ejs");

app.get("/dog", (req, res) => {
  res.send("WOOF");
});

app.listen(3000, () => {
  console.log("APP listening on port 3000");
});
