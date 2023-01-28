const express = require('express')
const router = express.Router()
const authenticateToken = require('../middleware/authMiddleware')

// Endpoint Can't do '/test'
// Do '/' instead, as this Endpoint is the home of this Endpoint

router.get('/', authenticateToken, (req, res, next) => {
    
    try {  
        const data = {
            username: req.user.username,
            name: req.user.name,
            bio: req.user.bio,
            date: req.user.date,
        }
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        res.json({data});
    } catch (err) {
        next({message: "Failed sending Data"})
    }
})

module.exports = router