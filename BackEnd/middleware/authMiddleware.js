const User = require('../db/users')
const jwt = require('jsonwebtoken')

const  authenticateToken = async(req, res, next) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    // DB Checker
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        // Assign Data from Auth_Middleware to Backend
        req.user = await User.findById(decoded.data._id)
        next()
    } catch (err) {
        res.status(401)
        console.log(err);
        console.log('====================================');
        console.log("DB Checker BREAK || User does not exist");
        console.log('====================================');
    }


} 

module.exports = { authenticateToken }