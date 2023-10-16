const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const router = express.Router();
require('../db/connectDB');
const User = require('../model/userSchema');


router.get('/', (req,res) => {
    res.send(`Hello Router!`)
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

router.post('/register', async(req, res) => {
    const {name, email, phone, work, password, cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({error: "Please fill the field properly"});
    }
    try{
        const userExist = await User.findOne({$or: [{email : email}, {phone : phone}]});
        if(userExist){
            let duplicateField = userExist.email === email ? "Email" : "Phone";
            return res.status(422).json({error: `${duplicateField} already registered`});
        }
        else if(password != cpassword) {
            return res.status(422).json({error: "Password does not match"});
        }
        else{
            const user = new User({name, email, phone, password, work, cpassword});

            const userRegister = await user.save();

            if(userRegister){
                res.status(201).json({message: "User registered successfully"});
            }
        }
    }catch (err) {
        console.log(err);
    }
});

router.post('/signin', async(req,res) => {
    try {
        const {email, password} = req.body;

        // validation
        if(!email || !password) {
            return res.status(422).json({error: 'Please fill all the field'})
        }

        // check email and password match with our existing database
        const userLogin = await User.findOne({email: email});
        
        if(userLogin) {
            const isMatch = bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();

            // store jwt in cookie
            // res.cookie("cookieName", data that need to be stored)
            res.cookie("jwtoken", token,{
                expires : new Date(Date.now() + 25892000000),
                httpOnly : true
            });
            
            if(!isMatch){
                res.status(400).json({error : "Invalid Password"});
            }
            else{
                res.status(200).json({message: "user signin successfully"});
            }
        }
        else{
            res.status(400).json({error: "Invalid email"});
        }

    }catch (error) {
        console.log(`${error}`)
    }

});


module.exports = router;