const Notifications = require('../db/notificationModel')
const jwt = require("jsonwebtoken");
const messageModel = require('../db/messageModel');
// const authenticateToken = require("../middleware/authMiddleware");
const users = require('../db/users')

module.exports = (io,socket) =>{
    //socket dealing with user
    var onlineUsers = []
      

    const addNewUser = (username,socketId) => {
        !onlineUsers.some(user=>user.username === username) && onlineUsers.push({username, socketId})}

    const removeUser = (socketId) => {
        onlineUsers = onlineUsers.filter(user => user.socketId !== socketId)
    }

    const getUser = (username) =>{
        return onlineUsers.find((user) => user.username === username)
    }
    socket.on("newUser",(token)=>{
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const username = decoded.user.name
        addNewUser(username,socket.id)
        console.log("gotcha!")
        console.log(onlineUsers)
    })

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
        const decoded = jwt.verify(req.usertoken, process.env.ACCESS_TOKEN_SECRET);
        const readerID = decoded.user._id
        console.log(readerID)

        // const username = onlineUsers.find(socket)
        const notification = await Notifications.updateOne({id:req.data._id},{
            $addToSet: {
                read_by: readerID,
              }
        })
        console.log(notification)
        
        })

    socket.on("following",
        async (req) =>{
            console.log("following")
            const decoded = jwt.verify(req.senderuser, process.env.ACCESS_TOKEN_SECRET);
            const sender = decoded.user.name
            const notification = await Notifications.create({
                action: req.action,
                sendername: sender,
                receivername: req.receiver
            })
            if(notification){
                var clients = io.of('/').socket;
                console.log(notification)
                console.log("followed")
                console.log(onlineUsers)
                const recieving = getUser(mmkk)
                console.log (recieving)
                // socket.to.emit("success following")


            }
    }
    )

    // client disconnected
    socket.on('disconnect', () => {
        removeUser(socket.id)
        console.log("what")
    })


    
    

}