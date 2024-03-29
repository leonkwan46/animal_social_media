const User = require("../db/users");
const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // DB Checker
  try {
    if (!authHeader || !token) throw new Error("Token Missing!");
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // Assign Data from Auth_Middleware to Backend
    req.user = await User.findById(decoded.user._id).select(
      "-following -followers"
    );
    if (!req.user) throw new Error("User is not Exist!");
    next();
  } catch (err) {
    // Send Custom error message to errorHandler middleware
    err.message = "AuthWrong";
    next(err);
  }
};

module.exports = authenticateToken;
