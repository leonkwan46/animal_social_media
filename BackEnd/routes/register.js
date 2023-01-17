const User = require('./db/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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