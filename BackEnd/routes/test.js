const express = require('express')
const router = express.Router()
const { authenticateToken } = require('../middleware/authMiddleware')

// Path Can't do '/test'
// Do '/' instead, as thie route is the home of this route

router.get('/', authenticateToken, (req, res) => {
    const data = {
        username: req.user.username,
        password: req.user.password
    }
    res.json({data})
})

module.exports = router