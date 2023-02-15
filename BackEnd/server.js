const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./db/config')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: {origin: "http://localhost:3000"}})



//Middlewares (App-level)
app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 1000000000,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(cors());
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//     limit: "50mb",
//     parameterLimit: 1000000000,
//   })
// );

// MongoDB Connection
connectDB();

// Register Router
const registerRoute = require("./routes/register");
app.use("/register", registerRoute);

//Login Router
const loginRoute = require("./routes/login");
app.use("/login", loginRoute);

// Profile Router
const profileRoute = require("./routes/profile");
app.use("/profile", profileRoute);

//create, get post Router
const homepageRoute = require("./routes/homepage");
app.use("/homepage", homepageRoute);

// Handle following a user and being Followed by a user
const network = require("./routes/network");
const { clearScreenDown } = require('readline')
app.use("/network", network);

// Error Handling middleware always at LAST
// Can only use on Routes/Endpoints, not DB Connection
app.use(errorHandler);

// app.listen(5000, () => {
//     console.log("http://localhost:5000");
// });

const socketUser = require("./socket/socketUser")
const socketEvent = require("./socket/socketEvent")

// let onlineUsers = []

// const addNewUser = (username,socketId) => {
//     !onlineUsers.some(user=>user.username === username) && onlineUsers.push({username, socketId})}

// const removeUser = (socketId) => {
//     onlineUsers = onlineUsers.filter(user => user.socketId !== socketId)
// }

// const getUser = (username) =>{
//     return onlineUsers.find((user) => user.username === username)
// }
// connect with client

const onConnection = (socket) =>{
    socketUser(io,socket);
    socketEvent(io,socket);
}
// io.on('connection', (socket) => {

//     // // take action from client
//     // socket.on("newUser",(username)=>{
//     //     addNewUser(username,socket.id)
//     //     console.log("gotcha!")
//     // })
  
//     // // client disconnected
//     // socket.on('disconnect', () => {
//     //     removeUser(socket.id)
//     })

//     socket.on("createPost",({senderName,action,timestamp})=>{
//         // console.log(`I got ${timestamp}!`)
//         io.emit("getPost",{senderName,action,timestamp})
//     })
    

io.on('connection',onConnection);

server.listen(5000,() => {
    console.log("socket.io server is ready")
});
