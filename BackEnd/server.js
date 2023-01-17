const express = require('express')

const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
// const User = require('./db/users')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')

// const { authenticateToken } = require('./middleware/authMiddleware')

const app = express()

// app.use(body.urlencoded({extended:true}))
// app.use(bodyParser.json())
// app.use(express.json());
// app.use(cors());

// app.get('/test', (req, res) => {
//     const data = {
//         haha: 'haha'
//     }
//     res.json({data})
// })

// app.post('/register', async(req, res) => {
//     // const hash = bcrypt.hash(req.bodypassword, salt) 
//     const data = new User({
//         username: req.body.username,
//         password: req.body.password,
//     })
//     try {
//         // data.save();
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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});