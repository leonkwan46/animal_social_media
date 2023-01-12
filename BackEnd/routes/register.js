const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const [username, password, confirm_password] = req.body
    
})