const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    // get token
    const token = req.headers.authorization.split(" ")[1];

    // verify
    const verifyToken = jwt.verify(
      token,
      process.env.SECRET_KEY || "secretkey"
    );
    const rootUser = await User.findOne({ _id: verifyToken._id });
    if (!rootUser) {
      res.status(401).send("Unauthorized: No user found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser.id;

    next();
  } catch (error) {
    res.status(401).send("Unauthorized: No token provided");
    console.log(error);
  }
};

module.exports = Authenticate;
