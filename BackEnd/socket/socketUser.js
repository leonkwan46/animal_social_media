const jwt = require("jsonwebtoken");


module.exports = (io,socket) =>{
    let onlineUsers = []
// const username =     

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

// client disconnected
socket.on('disconnect', () => {
    removeUser(socket.id)
})
}