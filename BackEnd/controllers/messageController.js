//when we dealing with mongoose, interact with database = make a promise => have to use async

// import it because it contain script for async handler (easier to write code)
const asyncHandler = require('express-async-handler')

//create mongoose branch to create message
const Message = require('../model/messageModel')

// @desc get message
// @route GET /api/goals
// @access private
const getMessage = asyncHandler(async(req,res) => {
    const messages = await Message.find()
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