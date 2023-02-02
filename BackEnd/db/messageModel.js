const mongoose = require("mongoose");

//schema = field in the desire collections

<<<<<<< HEAD
const messageSchema = mongoose.Schema(
  {
    user: {
      // define the type of user by ID from created message
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // add to proof which user this user belong to
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add text"],
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "Message",
  }
);
=======
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
>>>>>>> e1404540f35b129ae14d84cc63c474d49eadd006

//export as model
module.exports = mongoose.model("Message", messageSchema);
