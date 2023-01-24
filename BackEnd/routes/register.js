const express = require('express')
const router = express.Router()

const User = require('../db/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Endpoint Can't do '/register'
// Do '/' instead, as this Endpoint is the home of this Endpoint

router.post('/', async(req, res, next) => {

    const {username, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)
    const user = new User({
        username: username,
        password: hash,
    })

    try {
        const userExist = User.findOne({username})
        if (!userExist) throw new Error("User already exist")

        const saved = user.save();
        if(!saved) throw new Error("Register Failed")

        jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
            res.json({token});
        })
    } catch (err) {
        console.log('====================================');
        console.log("NANI");
        console.log('====================================');
        next(err)
    }
})

module.exports = router;