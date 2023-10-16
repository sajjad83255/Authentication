// require express
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// create a variable to access express method & properties
const app = express();

const PORT = process.env.PORT;

// require db
require('./db/connectDB');
app.use(express.json());
app.use(require('./routes/auth'));

const middleware = (req,res,next) => {
    console.log('hello middleware');
}

// app.get(path, callback)
app.get('/', (req,res) => {
    res.send(`Ajj se ham developer!!`)
});

app.get('/about', middleware, (req,res) => {
    res.send(`Engineer hai`)
});

app.get('/contact', (req,res) => {
    res.send(`Web developer`)
});

app.get('/signin', (req,res) => {
    res.send(`sign-in kar`)
});

app.get('/signup', (req,res) => {
    res.send(`sign up kar`)
});

// create a server using listen method
// app.listen(PORT, callback)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});