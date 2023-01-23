const express = require('express')
const router = express.Router()
const authenticateToken = require('../middleware/authMiddleware')

// Endpoint Can't do '/test'
// Do '/' instead, as this Endpoint is the home of this Endpoint

router.get('/', authenticateToken, (req, res, next) => {
    
    try {  
        const data = {
            username: req.user.username,
            password: req.user.password
        }
        res.json({data});
    } catch (err) {
        next({message: "Failed sending Data"})
    }
})

module.exports = router