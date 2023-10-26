const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        phone: {
            type: Number,
            require: true
        },
        work: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        cpassword: {
            type: String,
            require: true
        },
        tokens : [
            {
                token:{
                    type: String,
                    required:true
                }
            }
        ]
    }
)

// password hashing 
userSchema.pre ('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})

// genearting JWT token
userSchema.methods.generateAuthToken = async function () {
    try {
        // jwt.sign(payload- it must be unique, secret or privacy key)
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token})
        this.save();
        return token;
    } catch (error) {
        console.log(`${error}`);
    }
}

// create a collection and connect our schema without database
const User = mongoose.model('USER', userSchema);

module.exports = User;