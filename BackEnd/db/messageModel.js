const mongoose = require("mongoose");

//schema = field in the desire collections

const messageSchema = mongoose.Schema({
    id:{
        // define the type of user by ID from created message
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // add to proof which user this user belong to
        ref: 'User',
    },
    text:{
        type: String,
        required: [true, 'Please add text']
    },
    name:{
        type: String,
        required: true,
    }
},{
    timestamps: true
},
{
    collection: 'Message'
})

//export as model
module.exports = mongoose.model("Message", messageSchema);
