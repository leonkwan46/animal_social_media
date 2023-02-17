const mongoose = require("mongoose");

//schema = field in the desire collections

const notificationSchema = mongoose.Schema(
  {
    action: {
      type: String,
      required: [true, "Please add text"],
    },
    sendername: {
      type: String,
      required: true,
    },
    receivername:{
        type:String,
        required: true,
        default:'all'
    },
    read_by:{
        type: [String],
        
      }
   
  },
  {
    timestamps: true,
  },
  {
    collection: "Notification",
  }
);

//export as model
module.exports = mongoose.model("Notification", notificationSchema);
