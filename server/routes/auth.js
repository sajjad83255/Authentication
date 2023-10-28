const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const router = express.Router();
require("../db/connectDB");
const User = require("../model/userSchema");
const authenticate = require("../middleware/Authenticate");

const SECRET_KEY = process.env.SECRET_KEY || "secretkey";

router.get("/", (req, res) => {
  res.send(`Hello Router!`);
});

// router.post('/register', (req,res) => {
//     // console.log(req.body);
//     // res.json({message: req.body});

//     // storing the user data in database using promises

//     // get data
//     const {name, email, phone, work, password, cpassword} = req.body;

//     // check validation
//     if(!name || !email || !phone || !work || !password || !cpassword)
//     {
//         return res.status(422).json({error: "Please fill the field properly"});
//     }
//     // check email and phone number are unique
//     User.findOne({$or: [{ email: email}, { phone: phone }]})
//     .then((userExist) => {
//         if(userExist) {
//             let duplicateField = userExist.email === email ? "Email" : "Phone";
//             return res.status(422).json({error: `${duplicateField} already registered`});
//         }
//         const user = new User({name, email, phone, work, password, cpassword});
//         user.save().then(() => {
//             res.status(201).json({message: "User registerted successfully"});
//         }).catch((err) => res.status(500).json({error: "Failed to registered"}))
//     }).catch(err => {
//         console.log(err)
//     });
// })

// using async await

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }
  try {
    const userExist = await User.findOne({
      $or: [{ email: email }, { phone: phone }],
    });
    if (userExist) {
      let duplicateField = userExist.email === email ? "Email" : "Phone";
      return res
        .status(422)
        .json({ error: `${duplicateField} already registered` });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password does not match" });
    } else {
      const user = new User({ name, email, phone, password, work, cpassword });

      const userRegister = await user.save();

      if (userRegister) {
        res.status(201).json({ message: "User registered successfully" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(422).json({ error: "Please fill all the field" });
    }

    // check email and password match with our existing database
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Password" });
      } else {
        res.status(200).json({ message: "user signin successfully", token });
      }
    } else {
      res.status(400).json({ error: "Invalid email" });
    }
  } catch (error) {
    console.log(`${error}`);
  }
});

router.get("/about", authenticate, (req, res) => {
  try {
    res.send(req.rootUser);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong or invalid token" });
    console.log(`${error}`);
  }
});

module.exports = router;
