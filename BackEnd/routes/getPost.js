const express = require('express')
const router = express.Router()
const Messages = require('../db/messageModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const protected = require('../middleware/authMiddleware')
const asyncHandler = require('express-async-handler')


router.get('/', protected, async(req, res, next) => {
    console.log(req.body)
        try{
        const message = await Messages.find()
        console.log("check1")
        // check if password is matched
        if(message){
            res.status(200).json(message)
            }
        else{
            res.status(400)
            throw new Error('No Message Found!')
        }}
        catch (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            next(err)
            
        }

     

        
    
})

module.exports = router;