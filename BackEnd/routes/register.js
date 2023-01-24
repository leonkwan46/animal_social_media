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

        user.save((err) => {
            err.message = "WTF LAH"
            if(err.code == 11000) {
                throw new Error("User already exist")
            } 
        });

        jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
            res.json({token});
        })
    } catch (err) {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        next(err)
    }
})

module.exports = router;