const express = require('express')
const body = require('body-parser')
const cors = require('cors')
require('./db/config')

const bodyParser = require('body-parser');
const app = express()
const User = require('./db/users')

app.use(body.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

app.post('/register', async(req, res) => {
    const data = new User({
        username: req.body.username,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    })
    try {
        // const addedUser = data.save();
        res.json(data)
    } catch (err) {
        res.json("FAILED")
    }
})

app.listen(5000, () => {
    console.log("http://localhost:5000");
});