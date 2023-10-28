// require express
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookiePaser = require("cookie-parser");

require("dotenv").config();
// create a variable to access express method & properties
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookiePaser());

// require db
require("./db/connectDB");
app.use(express.json());
app.use(require("./routes/auth"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

// const middleware = (req,res,next) => {
//     console.log('hello middleware');
// }

// app.get(path, callback)
app.get("/", (req, res) => {
  res.send(`Ajj se ham developer!!`);
});

// app.get('/about', middleware, (req,res) => {
//     res.send(`Engineer hai`)
// });

app.get("/contact", (req, res) => {
  res.send(`Web developer`);
});

app.get("/signin", (req, res) => {
  res.send(`sign-in kar`);
});

app.get("/signup", (req, res) => {
  res.send(`sign up kar`);
});

// create a server using listen method
// app.listen(PORT, callback)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
