const express = require('express')
const body = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('./db/config')
require('dotenv').config

const bodyParser = require('body-parser')
const app = express()
const User = require('./db/users')

app.use(body.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

app.get('/test', authenticateToken, (req, res) => {
    res.json("asd")
})

app.post('/register', async(req, res) => {
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

function authenticateToken (req, res, next) {
    console.log("HEREEEE");
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(999999999)

    jwt.verify(token, 'secretkey', (err, user) => {
        if(err) return res.sendStatus(121212121212121)
        next()
    })
} 



app.listen(5000, () => {
    console.log("http://localhost:5000");
});