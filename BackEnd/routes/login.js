const jwt = require('jsonwebtoken')
const bcrypt  = require('bcryptjs')
// import it because it contain script for async handler (easier to write code)
const asyncHandler = require('express-async-handler')
const User = require('../model/usersModel')

router.post('/', async(req, res, next) => {

    const {username, password} = req.body;
    try {
        const user = await User.findOne({username})

        // check if password is matched
        if(user && (await bcrypt.compare(password, user.password))){
            jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
            res.json({token});
            })
        }

        
    } catch (err) {
        res.status(400)
        throw new Error('Username or password incorrect')
    }
})

module.exports = router;