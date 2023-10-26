const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const Authenticate = async(req, res, next) => {
    try {
        // get token
        const token = req.cookies.jwtoken;

        // verify
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token" : token});
        if(!rootUser){
            throw new Error('User not found');
        };
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser.id;

        next();

    } catch (error) {
        res.status(401).send('Unauthorized: Notoken provided');
        console.log(error);
    }
}

module.exports = Authenticate;