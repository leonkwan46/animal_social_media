//when we dealing with mongoose, interact with database = make a promise => have to use async

// import it because it contain script for async handler (easier to write code)
const asyncHandler = require('express-async-handler')

//create mongoose branch to create message
const Message = require('../model/messageModel')

// @desc get message
// @route GET /api/goals
// @access private
const getMessage = asyncHandler(async(req,res) => {
    // find message that specific for user!
    const messages = await Message.find({user: req.user.id})
    res.status(200).json(messages)
})

// @desc create message
// @route POST /api/goals
// @access private
const createMessage = asyncHandler(async(req,res) => {
    //to check error if it has any text in field
    if(!req.body.text){
        res.status(400)
        throw new Error('please add text')
    }
    
    const message = await Message.create({
        text: req.body.text,
        user: req.user.id,
    })
    res.status(200).json(message)
})

// @desc update message
// @route PUT /api/goals
// @access private
const updateMessage = asyncHandler(async(req,res) => {
    // check if there's message
    const message = await Message.findById(req.params.id)

    if(!message){
    res.status(400)
    throw new Error('Message not found')
    }

    //checkuser 
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    //check for the goal match logged in user
    if(message.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    // to update it
    //third is option tell that it's new

    const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })

    res.status(200).json(updatedMessage)
})

// @desc delete message
// @route DELETE /api/goals
// @access private
const deleteMessage = asyncHandler(async(req,res) => {
    // check if there's message
    const message = await Message.findById(req.params.id)

    if(!message){
    res.status(400)
    throw new Error('Message not found')
    }

     //checkuser 
     const user = await User.findById(req.user.id)
     if(!user){
         res.status(401)
         throw new Error('User not found')
     }
 
     //check for the goal match logged in user
     if(message.user.toString() !== user.id){
         res.status(401)
         throw new Error('User not authorized')
     }
     
    //to remove
    await message.remove()

    res.status(200).json({id:req.params.id})
})

module.exports = {
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage,
}