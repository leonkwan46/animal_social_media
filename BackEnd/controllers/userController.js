
const jwt = require('jsonwebtoken')
const bcrypt  = require('bcryptjs')
// import it because it contain script for async handler (easier to write code)
const asyncHandler = require('express-async-handler')
const User = require('../model/usersModel')


// @desc register user
// @route POST /api/user
// @access public
const registerUser = asyncHandler(async(req,res) => {
    // to register it need to destruct the data user
    const {username, password} = req.body
    if(!username ||! password){
        res.status(400)
        throw new Error('please add all fields')
    }

    // check if user exists
    const userExists = await User.findOne({username})
    if(userExists){
        res.status(400)
        throw new Error('user already exists')
    }

    // hash password with bcrypt
    // salt ~ random input add to password to preven stealing (number = howmany added characters)
    const salt = await bcrypt.genSalt(10)
    // to hash require origin + salt
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        username,
        password: hashedPassword
    })

    //if it's successful
    if(user){
        res.status(201).json({
            _id:user.id,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
    
})

//matching username + password => create token 
// @desc Login
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async(req,res) => {
    //check if there's username password sent to body
    const {username, password} = req.body

    // check if user exists
    const user = await User.findOne({username})

    // check if password is matched
    if(user && (await bcrypt.compare(password, user.password))){
        // res.json({
        //     _id: user.id,
        //     username: user.username,
        //     token: generateToken(user._id)
        // })
        const redir = {redirect:'/'}
        const token = generateToken(user.id)
        res.json({token,redir})
    } else {
        res.status(400)
        throw new Error('Username or password incorrect')
    }
})

//have to send token when register and login

// @desc get user's data
// @route GET /api/users/me
// @access private
// need to check user by middlewhere
const getMe = asyncHandler(async(req,res) => {
    const {_id,username} = await User.findById(req.user.id)

    res.status(200).json({
        id:_id,
        username,
    })
})

// to generate token => put user id to make payload
//sign with id (will pass to function), through secret code,
const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe,
}