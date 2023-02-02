const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    date: {
      type: String,
    },
    bio: {
      type: String,
    },
<<<<<<< HEAD
    profilePic: {
      type: String,
    },
    coverPic: {
      type: String,
    }
=======
    following: {
      type: [String],
    },
    followers: {
      type: [String],
    },
>>>>>>> e1404540f35b129ae14d84cc63c474d49eadd006
  },
  { collection: "users" }
);

module.exports = mongoose.model("users", userSchema);
