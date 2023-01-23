const express = require('express')
const router = express.Router()

const User = require('../db/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Endpoint Can't do '/register'
// Do '/' instead, as this Endpoint is the home of this Endpoint

router.post('/', async(req, res, next) => {

    const salt = 10;
    const hash = await bcrypt.hash(req.body.password, salt)
    const data = new User({
        username: req.body.username,
        password: hash,
    })

    try {
        await data.save();
        jwt.sign({data}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
            res.json({token});
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router;