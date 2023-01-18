const express = require('express')
const router = express.Router()

const User = require('../db/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Path Can't do '/register'
// Do '/' instead, as thie route is the home of this route

router.post('/', async(req, res) => {
    // const hash = bcrypt.hash(req.bodypassword, salt)
    console.log('====================================');
    console.log("SUCCESS");
    console.log('===================================='); 
    const data = new User({
        username: req.body.username,
        password: req.body.password,
    })
    try {
        await data.save();
        jwt.sign({data}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
            if (err) {
                console.log('====================================');
                console.log("Register route - Token BREAK");
                console.log(err);
                console.log('====================================');
            } else {
                res.json({token});
            }
        })
    } catch (err) {
        console.log('====================================');
        console.log("Register route BREAK");
        console.log(err);
        console.log('====================================');    
    }
})

module.exports = router;