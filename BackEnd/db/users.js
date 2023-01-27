const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    date: {
        type: String,
    },
    bio: {
        type: String,
    }
}, {collection: 'users'});

module.exports = mongoose.model('users', userSchema);