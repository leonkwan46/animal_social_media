const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'please add username'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'please add password']
    }
},
{
    timestamps: true,
    collection:'users'
})

module.exports = mongoose.model('User', userSchema);