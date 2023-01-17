const express = require('express')
const body = require('body-parser')
const cors = require('cors')
require('./db/config')
require('dotenv').config()

const User = require('./db/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { authenticateToken } = require('./middleware/authMiddleware')


const bodyParser = require('body-parser')
const app = express()

app.use(body.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
    const data = {
        haha: 'haha'
    }
    res.json({data})
})

app.post('/register', async(req, res) => {
    // const hash = bcrypt.hash(req.bodypassword, salt) 
    const data = new User({
        username: req.body.username,
        password: req.body.password,
    })
    try {
        // data.save();
        jwt.sign({data}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
            if (err) {
                console.log(err);
            } else {
                res.json({token});
            }
        })
    } catch (err) {
        res.json("Register FAILED")
    }
})


app.listen(5000, () => {
    console.log("http://localhost:5000");
});