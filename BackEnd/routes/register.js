const express = require('express')
const router = express.Router()

const User = require('../db/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Endpoint Can't do '/register'
// Do '/' instead, as this Endpoint is the home of this Endpoint

router.post('/', async(req, res, next) => {
    try {
    const {username, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)
    const user = new User({
        username: username,
        password: hash,
    })

        const found = await User.findOne({username})
        if(found) throw new Error("User already Exist")
        user.save();
        jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
            res.json({token});
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router;