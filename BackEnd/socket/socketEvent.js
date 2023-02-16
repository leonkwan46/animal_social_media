const Notifications = require('../db/notificationModel')
const jwt = require("jsonwebtoken");
// const UserNotification = require('../db/userNotification');
const messageModel = require('../db/messageModel');
// const {onlineUsers,getUser} = require('./socketUser')

module.exports = (io,socket) =>{
    socket.on("createPost",
                // console.log(`I got ${timestamp}!`)
                async(req)=>{
                const notification = await Notifications.create({
                    action: req.action,
                    sendername: req.senderName,
                })
                if(notification){
                    console.log(notification)
                    console.log("added")
                    socket.emit("getPost",{
                        notification
                        })
                }})
                
    socket.on("completed-notify",
    async(req)=>{
        console.log("already")
        // const decoded = jwt.verify(req.usertoken, process.env.ACCESS_TOKEN_SECRET);
        // const readerID = decoded.user._id
        // // const username = onlineUsers.find(socket)
        // await Notifications.findOneAndUpdate({id:req.data._id}),{
        //     $push: {
        //         read_by: readerID,
        //       }
        // }
        
        })

    

}