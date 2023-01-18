const mongoose = require('mongoose')

//schema = field in the desire collections

const messageSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'Please add text']
    }
},{
    timestamps: true
})

//export as model
module.exports = mongoose.model('Message', messageSchema)