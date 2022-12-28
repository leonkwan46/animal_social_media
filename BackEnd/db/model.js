const mongoose = require('mongoose')

const userSchema = {
    username:"",
    password:""
}

const User = mongoose.model('User', userSchema)

module.exports = User