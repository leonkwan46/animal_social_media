const express = require('express')
const app = express()
const body = require('body-parser')
const cors = require('cors')
const connectDB = require('./db/config')
const bodyParser = require('body-parser')
const router = express.Router()
require('dotenv').config()


// MongoDB Connection
connectDB()

//MiddleWares (App-level)
app.use(body.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());


// Register Router
const registerRoute = require('./routes/register')
app.use('/register', registerRoute)

// Test Router
const testRoute = require('./routes/test')
app.use('/test', testRoute)



// app.post('/register', async(req, res) => {
//     // const hash = bcrypt.hash(req.bodypassword, salt) 
//     const data = new User({
//         username: req.body.username,
//         password: req.body.password,
//     })
//     try {
//         await data.save();
//         jwt.sign({data}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.json({token});
//             }
//         })
//     } catch (err) {
//         res.json("Register FAILED")
//     }
// })

// app.get('/test', authenticateToken, (req, res) => {
//     console.log(req.user.id);
//     const data = {
//         username: req.user.username,
//         password: req.user.password
//     }
//     res.json({data})
// })








app.listen(5000, () => {
    console.log("http://localhost:5000");
});