const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/usersModel')

//create method to check user
const protect = asyncHandler(async(req,res,next) => {
    //initialize token variable
    let token

    //check the way to send = header (in header it has authorization)
    // check if it starts with bearer
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //get token from bear header
            token = req.headers.authorization.split(' ')[1]
            // split Bearer code to be code only

            // verify token (can get payload)
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from the token (user ID) => don't want passwaord
            req.user = await User.findById(decoded.id).select('-password')
            
            //the end to go next
            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error ('Not authorized')
        }
    }

    // check if it doesn't have token
    if(!token){
        res.status(401)
        throw new Error ('Not authorized, no token')
    }

})

module.exports = {protect}