const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./db/config')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);

//Middlewares (App-level)
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000000 }));


// MongoDB Connection
connectDB();

// Register Router
const registerRoute = require('./routes/register')
app.use('/register', registerRoute)

//Login Router
const loginRoute = require('./routes/login')
app.use('/login', loginRoute)

// Profile Router
const profileRoute = require('./routes/profile')
app.use('/profile', profileRoute)

//create, get post Router
const homepageRoute = require('./routes/homepage')
app.use('/homepage', homepageRoute)

// Handle following a user and being Followed by a user
const network = require("./routes/network");
app.use("/network", network);

// Error Handling middleware always at LAST
// Can only use on Routes/Endpoints, not DB Connection
app.use(errorHandler)

app.listen(5000, () => {
    console.log("http://localhost:5000");
});


// // รอการ connect จาก client
// io.on('connection', (client) => {
//     console.log('user connected')
  
//     // เมื่อ Client ตัดการเชื่อมต่อ
//     client.on('disconnect', () => {
//         console.log('user disconnected')
//     })

//     // // ส่งข้อมูลไปยัง Client ทุกตัวที่เขื่อมต่อแบบ Realtime
//     // client.on('sent-message', function (message) {
//     //     io.sockets.emit('new-message', message)
//     // })
// })

// server.listen(5000,() => {
//     console.log("socket.io server is ready")
// });