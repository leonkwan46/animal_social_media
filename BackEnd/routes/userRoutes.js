const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
router.post('/', registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)

module.exports = router

//register functionality => need to encrypt password to store password in database safer => use bcryptjs